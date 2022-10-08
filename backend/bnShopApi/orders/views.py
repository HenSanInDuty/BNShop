from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
from orders.models import Order
from orders.serializers import OrdersSerializer, UpdateOrdersSerializer, ViewOrdersSerializer
from products.views import get_info_product
from drf_yasg.utils import swagger_auto_schema
# Create your views here.
@swagger_auto_schema()
class OrderViewAll(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrdersSerializer
    
    def get(self,request):
        customer = request.user.user.customer
        if customer:
            orders = Order.objects.filter(customer = customer)
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
                    'amount':order[0].amount
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