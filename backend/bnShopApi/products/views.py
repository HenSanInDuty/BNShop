from unicodedata import category
from rest_framework import generics,status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from drf_yasg.utils import swagger_auto_schema

from products.serializers import AttachmentSerializer, CategorySerializer, DetailSerializer, ProductRegisterSerializer, ProductSerializer, CategorySwagger
from .models import Brand, Category, Detail, Product
from permissions.permissions import AgencyPermission
import json

# Create your views here.
@api_view(['POST'])
@permission_classes([IsAdminUser])
def init_countries(request):
    f = open("assets/countries.json")
    data = json.load(f)
    f.close()
    try:
        for origin in data:
            for origin_brand in data:
                Brand.objects.create(origin=origin['name'],origin_brand=origin_brand['name'])
        return Response({"message":"Add countries successful"})
    except Exception:
        return Response({"message":"Add countries unsuccessful"},status=status.HTTP_400_BAD_REQUEST)

class ProductViewAll(generics.GenericAPIView):
    serializer_class = ProductSerializer
    model = Product
    def get(self,request):
        return Response({"non"})
    
    def post(self,request):
        
        return Response({"Van non"})

class CategoryViewAll(generics.GenericAPIView):
    serializer_class = CategorySerializer
    model = Category
    permission_classes = (IsAuthenticated,AgencyPermission)
    
    def get(self,request):
        agency = request.user.user.agency
        return Response(self.serializer_class(
            self.model.objects.filter(agency = agency),
            many=True).data)
    
    @swagger_auto_schema(request_body=CategorySwagger)
    def post(self,request):
        data = request.data
        data['agency'] = request.user.user.agency.id
        serializer = self.serializer_class(data=data)
        categories = self.model.objects.filter(name=data['name'])
        if categories:
            return Response({"message":"This category name has exists"})
        else:
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            
    def delete(self,request):
        data = request.data
        agency_id = request.user.user.agency.id
        try:
            instance_delete = []
            for i in data['id']:
                instance = self.model.objects.get(id=i,agency=agency_id)
                serializer = self.serializer_class(instance)
                instance.delete()
                instance_delete.append(serializer.data)
            return Response(instance_delete)
        except Exception:
            return Response({"message":"Something wrong"},status=status.HTTP_400_BAD_REQUEST)
                  
class CategoryViewDetail(generics.GenericAPIView):
    serializer_class = CategorySerializer
    model = Category
    permission_classes = (IsAuthenticated,AgencyPermission)
    
    @swagger_auto_schema(request_body=CategorySwagger)
    def patch(self,request,id):
        agency_id = request.user.user.agency.id
        data = request.data
        data['agency'] = request.user.user.agency.id
        try:
            instance = self.model.objects.get(id=id,agency=agency_id)
            serializer = self.serializer_class(instance,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        except Exception:
            return Response({"message":"Not found"},status=status.HTTP_404_NOT_FOUND)
    
    def delete(self,request,id):
        agency_id = request.user.user.agency.id
        try:
            instance = self.model.objects.get(id=id,agency=agency_id)
            serializer = self.serializer_class(instance)
            instance.delete()
            return Response(serializer.data)
        except Exception:
            return Response({"message":"Not found"},status=status.HTTP_404_NOT_FOUND)
        
class DetailViewAll(generics.GenericAPIView):
    model = Detail
    serializer_class = DetailSerializer
    
    
class TestSomethingelse(generics.GenericAPIView):
    @swagger_auto_schema(request_body=ProductRegisterSerializer)
    def post(self,request):
        serializer = ProductRegisterSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.validated_data.get('category'))
        return Response()