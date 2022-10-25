from dataclasses import field
from pkg_resources import require
from rest_framework import serializers
from .models import Type, Voucher


class CreateVoucherSerializer(serializers.Serializer):
    SCOPE_VOUCHER = ((0, 'All'), (1, 'Special'))

    id = serializers.IntegerField(required=False)
    type = serializers.IntegerField()
    customer = serializers.ListField(required=False)
    order_detail = serializers.ListField(required=False)
    code = serializers.CharField(max_length=40, required=False)
    qty = serializers.IntegerField(required=False)
    subcontent = serializers.CharField(max_length=100, required=False)
    from_price = serializers.FloatField(required=False)
    from_product = serializers.IntegerField(required=False)
    reduce_price = serializers.FloatField(required=False)
    reduce_persent = serializers.FloatField(required=False)
    end_date = serializers.DateTimeField(required=False)
    scope = serializers.ChoiceField(default=0, choices=SCOPE_VOUCHER)
    
    def validate(self, attrs):
        content = super().validate(attrs)
        if not Type.objects.filter(id = content['type']):
            raise serializers.ValidationError({"Type":"Type not found"})
        else:
            content['type'] = Type.objects.filter(id = content['type']).first()
        return content
    
    def create(self, validated_data):
        type_vou = validated_data['type'].type
        condition = validated_data['type'].condition
        #Init content and title 
        if condition == 0:
            content = "Order from "+str(validated_data['from_price'])+" VND"
        else:
            content = "Order from"+str(validated_data['from_product'])+" products"
        
        if type_vou == 0:
            title = "Reduce "+str(validated_data['reduce_price'])+" VND"
        else:
            title = "Reduce "+str(validated_data['reduce_percent'])+"%"
        validated_data['content'] = content
        validated_data['title'] = title
        new_voucher = Voucher.objects.create(**validated_data)
        print(new_voucher.__dict__)
        return {
            "id" : "2",
    "type" :  "2",
    "customer" :  "2",
    "order_detail" :  "2",
    "code" :  "2",
    "qty" :  "2",
    "subcontent" :  "2",
    "from_price" :  "2",
    "from_product" :  "2",
    "reduce_price" : "2",
    "reduce_persent" :  "2",
    "end_date" :  "2",
    "scope" :  "2"
        }


class VoucherTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = "__all__"