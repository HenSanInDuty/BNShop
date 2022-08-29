from rest_framework import serializers
from .models import AddressProfile
class AddressSerializers(serializers.ModelSerializer):
    class Meta:
        model = AddressProfile
        
        fields = '__all__'
    