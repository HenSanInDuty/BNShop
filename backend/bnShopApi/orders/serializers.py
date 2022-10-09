from datetime import datetime
from rest_framework import serializers
from .models import Order, OrderDetail, Payment, STATUS

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

class ViewOrderDetailSerializer(serializers.ModelSerializer):
    class Meta():
        model = OrderDetail
        fields = "__all__"
 
class CreateOrdersDetailSerializer(serializers.Serializer):
    order = serializers.ListField()
    payment = serializers.IntegerField()
    #address
    def validate(self, attrs):
        result = super().validate(attrs)
        try:
            for i in attrs.get('order'):
                int(i)
        except ValueError:
            raise serializers.ValidationError({"orders":"Orders must be a number"})
        return result
    
    def create(self, validated_data):
        
        order_detail = OrderDetail.objects.create(status="Waiting for confirm",
                                                  payment=Payment.objects.filter(id=validated_data['payment'])[0])
        total = 0.0
        for order in validated_data['order']:
            order_model = Order.objects.filter(id=int(order))[0]
            order_detail.order.add(order_model)
            total+=order_model.amount
            order_detail.save()
        order_detail.total = total
        order_detail.save()
        return validated_data
    
class UpdateOrderDetailSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=STATUS)
    
    def update(self, instance, validated_data):
        instance.status = validated_data['status']
        if validated_data['status'] == '5':
            instance.date_receive=datetime.now()
        instance.save()
        return instance