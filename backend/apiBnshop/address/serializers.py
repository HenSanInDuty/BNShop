from rest_framework import serializers
from .models import AddressProfile
class AddressSerializers(serializers.ModelSerializer):
    class Meta:
        model = AddressProfile
        
        fields = '__all__'
    
    def update(self, instance, validated_data):
        instance.dc_tinh = validated_data.get('dc_tinh', instance.dc_tinh)
        instance.dc_quan = validated_data.get('dc_quan', instance.dc_quan)
        instance.dc_phuong = validated_data.get('dc_phuong', instance.dc_phuong)
        instance.dc_chitiet = validated_data.get('dc_chitiet', instance.dc_chitiet)
        instance.user = validated_data.get('user', instance.user)
        instance.save()
        return instance