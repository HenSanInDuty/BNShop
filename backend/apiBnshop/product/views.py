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
        types_exists = self.model.objects.all().values_list('loai_ten',flat=True)
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            if (serializer.validated_data.get('loai_ten') in types_exists):
                return Response({'message':'Đã có loại này rồi'})
            else:
                serializer.save()
                return Response(serializer.data)
        else:
            return Response(serializer.errors)

class ProductViewsAll(generics.GenericAPIView):
    model = productModels.Product
    serializer_class = productSerializers.ProductSerializer
    
    
    def get_permissions(self):
        if self.request.method != 'GET':
            return [IsAuthenticated(),permission.AgencyPermission()]
        else:
            return []
    
    def get(self,request,*arg):
        all_product = self.model.objects.all()
        serializer = self.serializer_class(all_product,many=True)
        return Response(serializer.data)
        
    def post(self,request,*arg):
        #serializers
        data = request.data
        data['user'] = request.user.id
        serializer = self.serializer_class(data=data)
        
        
        
        if (serializer.is_valid()):
            serializer.save()
            id_product = serializer.validated_data.get('id')
            data['product'] = id_product
            serializerPrice = productSerializers.ProductPriceSerializer
            serializerDetail = productSerializers.ProductDetailSerializer
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
            
        
    




