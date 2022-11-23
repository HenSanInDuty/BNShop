from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from address.models import Address
from address.serializers import AddressSerializer
from orders.models import OrderDetail
from orders.serializers import ViewOrderDetailSerializer
from permissions.permissions import ShipperPermission
from drf_yasg.utils import swagger_auto_schema

from shipping.serializers import StatusShippingNoteSerializer 
# Create your views here.
@swagger_auto_schema()
class ShippingStatus(generics.GenericAPIView):
    permission_classes = []
    serializer_class = StatusShippingNoteSerializer

    def post(self,request):
        data = request.data
        print(request.data)
        data['shipper'] = request.user.user.shipper.id
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            instance = serializer.save()
            if (instance.substatus == "0"):
                instance.order_detail.status = "5"
                instance.order_detail.save()

            if (instance.substatus == "2"):
                instance.order_detail.status = "4"
                instance.order_detail.save()

            
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

def get_info_shipping_package(order_detail):
    serializer_address = AddressSerializer(order_detail.address)

    result = {
        'id':order_detail.id,
        'total':order_detail.total,
        'payment':order_detail.payment.name,
        'date_order':order_detail.date_order,
        'status':order_detail.get_status_display(),
        'address':{
            **serializer_address.data
        },
        'customer':{
            'name':order_detail.customer.user.name,
            'phone':order_detail.customer.user.account.phone}
    }
    return result

@swagger_auto_schema()
class ListOrderDetailShipping(generics.GenericAPIView):
    permission_classes = [IsAuthenticated,ShipperPermission]
    serializer_class = ViewOrderDetailSerializer

    def get(self,request):
        shipper = request.user.user.shipper
        list_result = []
        order_detail = OrderDetail.objects.filter(shipper=shipper).order_by('status')
        for od in order_detail:
            list_result.append(get_info_shipping_package(od))
        return Response(list_result)

