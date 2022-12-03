from datetime import datetime
from rest_framework import serializers
from django.utils import timezone
from products.models import Quantity
from address.models import Address
from otherplatform.utilities import send_email
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
    agency_info = serializers.SerializerMethodField()
    customer_info = serializers.SerializerMethodField()
    shipper_info = serializers.SerializerMethodField()

    class Meta():
        model = OrderDetail
        fields = "__all__"

    def get_agency_info(self,obj):
        return obj.agency and obj.agency.user.name
    
    def get_customer_info(self,obj):
        return {
            'name':obj.customer.user.name,
            'phone': obj.customer.user.account.phone
        }

    def get_shipper_info(self,obj):
        return obj.shipper and obj.shipper.user.name
 
class PaymentSerializer(serializers.ModelSerializer):
    class Meta():
        model = Payment
        fields = "__all__"

class CreateOrdersDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    order = serializers.ListField()
    payment = serializers.IntegerField()
    address = serializers.IntegerField()
    #address
    def validate(self, attrs):
        result = super().validate(attrs)
        try:
            for i in attrs.get('order'):
                int(i)
        except ValueError:
            raise serializers.ValidationError({"orders":"Orders must be a number"})
        return result
    
    def save(self,customer):
        validated_data = self.validated_data
        
        address = Address.objects.filter(user_id=customer.user.id,
                                        id=validated_data.get('address')).first()                 
        if not address:
            raise serializers.ValidationError({"address":"Please re put address"})
        
        order_detail = OrderDetail.objects.create(status="Waiting for confirm",
                                                payment=Payment.objects.filter(id=validated_data['payment'])[0],
                                                address=address,
                                                customer=customer)
        agency = None
        total = 0.0
        for order in validated_data['order']:
            order_model = Order.objects.filter(id=int(order),
                                            order_detail__isnull=True).first()
            if not order_model:
                raise serializers.ValidationError({"order":"Wrong order, maybe order in order detail"})
            #Get product
            product = order_model.product
            price_of_product = product.price.all().reverse()
            agency = product.agency.first()
            for p in price_of_product:
                if p.end_datetime:
                    if p.end_datetime>=timezone.now():
                        price_once = p.price
                else:
                    price_once = p.price
            if product.quantity.last().quantity < order_model.qty:
                order_detail.delete()
                raise serializers.ValidationError({"qty":"Don't have anymore product"})
            # Change quantity of product
            quantity = Quantity.objects.create(quantity=product.quantity.last().quantity-order_model.qty,
                                                change_num=order_model.qty,
                                                note="User buy items",
                                                customer = customer,
                                                types = 3,
                                                price_once = price_once,
                                                product = product)
            # Add note quantity to product
            product.quantity.add(quantity)
            order_detail.order.add(order_model)
            total+=order_model.amount
            order_detail.save()
            # Add product to history of customer
            if not customer.bought_product.filter(id = product.id).exists():
                customer.bought_product.add(product)
        order_detail.total = total
        order_detail.agency = agency
        order_detail.save()

        validated_data['id'] = order_detail.id
        return validated_data
    
class UpdateOrderDetailSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=STATUS)
    
    def update(self, instance, validated_data):
        ud_instance = instance[0]
        ud_instance.status = validated_data['status']
        if validated_data['status'] == '5':
            send_email(ud_instance.customer.user.email,"Notify from BNSHOP",f"Invoice no {ud_instance.id} has been delivery successful. Thank you very much.")
            ud_instance.date_receive=datetime.now()
        ud_instance.save()
        return ud_instance