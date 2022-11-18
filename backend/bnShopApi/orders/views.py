from unittest import result
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated

from orders.models import Order, OrderDetail, Payment
from orders.serializers import CreateOrdersDetailSerializer, OrdersSerializer, PaymentSerializer, UpdateOrderDetailSerializer, UpdateOrdersSerializer, ViewOrderDetailSerializer, ViewOrdersSerializer
from permissions.permissions import AgencyPermission, ShipperPermission
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
            orders = Order.objects.filter(customer = customer,order_detail__isnull=True)
            serializer = ViewOrdersSerializer(orders,many=True)
            return Response(serializer.data)    
        return Response()
    
    def post(self,request):
        customer = request.user.user.customer
        if customer:
            data = request.data
            data['customer'] = customer.id
            serializer = self.serializer_class(data=data)
            if serializer.is_valid():
                instance = serializer.save()
                print(instance.id)
                order = Order.objects.filter(id = instance.id)
                result = ViewOrdersSerializer(order[0])
                return Response(result.data)
            else:
                return Response(serializer.errors)    
        return Response()

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
    result = {
        "id":od.id,
        "date_order":od.date_order,
        "date_receive":od.date_receive,
        "status":od.status,
        "address":od.address and {**od.address} ,
        "payment":od.payment.name,
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
        order_detail = OrderDetail.objects.all()
        result = []
        for od in order_detail:
            result.append(get_order_detail(od))
        return Response(result)
    
    def post(self,request):
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
    
    def get(self,request,id):
        od = OrderDetail.objects.filter(id = id)
        if od:
            return Response(od[0])
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
    
    def get(self,request,id):
        payment_all = Payment.objects.all()
        serializer = self.serializer_class(payment_all,many=True)
        return Response(serializer.data)