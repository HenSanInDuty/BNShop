from dataclasses import field
from rest_framework import serializers
from .models import Type, Voucher
class VoucherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voucher
        fields = "__all__"
        
class VoucherTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = "__all__"