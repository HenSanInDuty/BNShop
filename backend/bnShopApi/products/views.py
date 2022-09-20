from rest_framework import generics,status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from products.serializers import AttachmentSerializer, CategorySerializer, ProductSerializer
from .models import Brand, Category, Product
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
    except:
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
    
    def get(self,request):
        return Response(self.serializer_class(self.model.objects.all(),many=True).data)
    