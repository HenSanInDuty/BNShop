from rest_framework import serializers
from .models import Order, OrderDetail

class ViewOrdersSerializer(serializers.ModelSerializer):
    class Meta():
        model = Order
        fields = "__all__"

class OrdersSerializer(serializers.ModelSerializer):
    class Meta():
        model = Order
        fields = ['qty','product','customer']
        
class UpdateOrdersSerializer(serializers.ModelSerializer):
    class Meta():
        model = Order
        fields = ['qty']
 
class OrdersDetailSerializer(serializers.ModelSerializer):
    class Meta():
        model = OrderDetail
        fields = "__all__"
        