from rest_framework import serializers
from .models import Province
class ProvinceSerilizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Province
        fields = ['name']