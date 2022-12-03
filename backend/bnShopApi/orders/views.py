from rest_framework import generics, status, serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from address.serializers import AddressSerializer
from orders.models import Order, OrderDetail, Payment
from orders.serializers import CreateOrdersDetailSerializer, OrdersSerializer, PaymentSerializer, UpdateOrderDetailSerializer, UpdateOrdersSerializer, ViewOrderDetailSerializer, ViewOrdersSerializer
from permissions.permissions import AgencyPermission, AgencyShipperMixPermission, ShipperPermission
from products.models import Product
from products.views import get_info_product
from drf_yasg.utils import swagger_auto_schema
# Create your views here.

#Giỏ hàng
@swagger_auto_schema()
class OrderViewAll(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrdersSerializer
    
    def get(self,request):
        customer = request.user.user.customer
        if customer:
            orders = Order.objects.filter(customer = customer,order_detail__isnull=True).order_by("product__agency")
            serializer = ViewOrdersSerializer(orders,many=True)
            return Response(serializer.data)    
        return Response()
    
    def post(self,request):
        customer = request.user.user.customer
        product = None
        if request.data.get('product'):

            product = Product.objects.filter(id=request.data.get('product'),
                                            is_approved=True,
                                            is_delete=False).first()

        
        if customer and product:
            data = request.data
            data['customer'] = customer.id

            order = Order.objects.filter(product=product,
                                    order_detail__isnull=True,
                                    customer = customer).first()
            if order:
                order.qty = order.qty + data['qty']
                if order.qty > product.quantity.last().quantity:
                    order.qty = product.quantity.last().quantity
                order.save()
                serializer = ViewOrdersSerializer(order)
                return Response(serializer.data)
            else:
                if product.quantity.last().quantity < data['qty']:
                    return Response({"detail":"Don't have anymore product"},status=status.HTTP_400_BAD_REQUEST)

                serializer = self.serializer_class(data=data)
                if serializer.is_valid():
                    instance = serializer.save()
                    order = Order.objects.filter(id = instance.id)
                    result = ViewOrdersSerializer(order[0])
                    return Response(result.data)
                else:
                    return Response(serializer.errors)    
        return Response(
            {"detail":"Can't find product or customer"},
            status=status.HTTP_404_NOT_FOUND)

#Lấy giỏ hàng chi tiết
@swagger_auto_schema()
class OrderViewDetail(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UpdateOrdersSerializer
    
    def get(self,request,id):
        customer = request.user.user.customer
        if customer:
            order = Order.objects.filter(customer = customer, pk = id)
            serializer = OrdersSerializer(order[0])
            return Response({
                    **serializer.data,
                    'amount':order[0].amount,
                    'qty':order[0].qty
                })   
        return Response()
    
    def delete(self,request,id):
        customer = request.user.user.customer
        if customer:
            order = Order.objects.filter(customer = customer, pk = id)
            if order:
                order.delete()
                return Response({"detail":"Delete success"},status=status.HTTP_200_OK)
            
        return Response({"detail":"Not found"},status=status.HTTP_404_NOT_FOUND)

    def patch(self,request,id):
        customer = request.user.user.customer
        if customer:
            order = Order.objects.filter(customer = customer, pk = id)
            serializer = self.serializer_class(order[0],data=request.data)
            if serializer.is_valid():
                serializer.save()
                serializer_return = OrdersSerializer(order[0])
                return Response({
                    **serializer_return.data,
                    'amount':order[0].amount
                })
            else:
                return Response(serializer.errors)    
        return Response()

def get_order_detail(od):
    address_serializer = AddressSerializer(od.address)
    result = {
        "id":od.id,
        "date_order":od.date_order,
        "date_receive":od.date_receive,
        "status":od.status,
        "address":address_serializer.data,
        "payment":od.payment.name,
        "customer":{
            "user_id":od.customer.user.id,
            "name":od.customer.user.name
        },
        "agency":{
            "user_id":od.agency.user.id,
            "name":od.agency.user.name
        },
        "order":[
           {
               "id":o.id,
               "product":{
                   **get_info_product(o.product)
               },
               "amount":o.amount,
               "buy":o.qty
               } for o in od.order.all()
        ]
    }
    return result

#Đặt hàng
@swagger_auto_schema()
class OrderDetailViewAll(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CreateOrdersDetailSerializer
    
    def get(self,request):
        user = request.user
        if user.is_customer:
            order_detail = OrderDetail.objects.filter(customer=user.user.customer)
            result = []
            for od in order_detail:
                result.append(get_order_detail(od))
            return Response(result)
        elif user.is_agency:
            order_detail = OrderDetail.objects.filter(agency=user.user.agency)
            result = []
            for od in order_detail:
                result.append(get_order_detail(od))
            return Response(result)
    
    def post(self,request):
        if not request.user.is_customer:
            return Response({"detail":"Only customer can do this action"},status=status.HTTP_403_FORBIDDEN)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(customer=request.user.user.customer)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
            
#Thay đổi trạng thái đơn hàng
@swagger_auto_schema()
class OrderDetailViewDetail(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UpdateOrderDetailSerializer
    
    def get_permissions(self):
        per = super().get_permissions()
        if self.request.method != "GET":
            return [*per,AgencyShipperMixPermission()]
        else:
            return per

    def get(self,request,id):
        user = request.user
        if user.is_customer:
            od = OrderDetail.objects.filter(id = id,customer=user.user.customer).first()
            if od:
                return Response(get_order_detail(od))
            else:
                return Response({})
        else:
            od = OrderDetail.objects.filter(id = id).first()
            if od:
                return Response(get_order_detail(od))
            else:
                return Response({})
        
    def patch(self,request,id):
        od = OrderDetail.objects.filter(id=id)
        serializer = self.serializer_class(instance=od,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(get_order_detail(od[0]))
        else:
            return Response(serializer.errors)

#Payment
@swagger_auto_schema()
class PaymentViewAll(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializer
    
    def get(self,request):
        payment_all = Payment.objects.all()
        serializer = self.serializer_class(payment_all,many=True)
        return Response(serializer.data)