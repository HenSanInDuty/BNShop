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
    title = serializers.CharField(max_length=100, required=False)
    content = serializers.CharField(max_length=100, required=False)
    from_price = serializers.FloatField(required=False)
    from_product = serializers.IntegerField(required=False)
    reduce_price = serializers.FloatField(required=False)
    reduce_persent = serializers.FloatField(required=False)
    end_date = serializers.DateTimeField(required=False)
    scope = serializers.ChoiceField(default=0, choices=SCOPE_VOUCHER)
    
    def create(self, validated_data):
        
        result = {}
        return super().create(validated_data)


class VoucherTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = "__all__"