from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from orders.models import OrderDetail
from orders.serializers import ViewOrderDetailSerializer
from permissions.permissions import ShipperPermission
from drf_yasg.utils import swagger_auto_schema

from shipping.serializers import StatusShippingNoteSerializer 
# Create your views here.
@swagger_auto_schema()
class ShippingStatus(generics.GenericAPIView):
    permission_classes = [IsAuthenticated,ShipperPermission]
    serializer_class = StatusShippingNoteSerializer

    def post(self,request):
        data = request.data
        data['shipper'] = request.user.user.shipper
        serializer = self.serializer_class(data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

@swagger_auto_schema()
class ListOrderDetailShipping(generics.GenericAPIView):
    permission_classes = [IsAuthenticated,ShipperPermission]
    serializer_class = ViewOrderDetailSerializer

    def get(self,request):
        order_detail = OrderDetail.objects.filter(status="3")
        serializer = self.serializer_class(order_detail,many=True)
        return Response(serializer.data)

