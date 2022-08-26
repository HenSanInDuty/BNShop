from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

from product import serializers

from . import models as productModels
from . import serializers as productSerializers
from permission import permission
# Create your views here. 
class ProductTypeViews(generics.GenericAPIView):
    serializer_class = productSerializers.ProductTypeSerializer
    model = productModels.ProductType
    
    def get_permissions(self):
        if self.request.method == 'GET' :
            return [IsAuthenticated()]
        else:
            return [IsAuthenticated(),permission.AgencyPermission()]
    
    def get(self,request,*args):
        items = productModels.ProductType.objects.all()
        serializer = productSerializers.ProductTypeSerializer(items,many = True)
        
        return Response(serializer.data)
    
    def post(self,request,*args):
        typesExists = self.model.objects.all().values_list('loai_ten',flat=True)
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            if (serializer.validated_data.get('loai_ten') in typesExists):
                return Response({'message':'Đã có loại này rồi'})
            else:
                serializer.save()
                return Response(serializer.data)
        else:
            return Response(serializer.errors)
