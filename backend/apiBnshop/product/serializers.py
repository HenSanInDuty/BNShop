from dataclasses import fields
from pyexpat import model
from rest_framework import generics, serializers
from . import models as productModels


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = productModels.Product
        fields = '__all__'


class ProductDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = productModels.ProductDetail
        fields = '__all__'


class ProductPriceSerializer(serializers.ModelSerializer):

    class Meta:
        model = productModels.ProductPrice
        fields = '__all__'


class ProductTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = productModels.ProductType
        fields = '__all__'


class ProductOfTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = productModels.ProductOfType
        fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = productModels.ProductImage
        fields = '__all__'
