from datetime import datetime
from django.forms.models import model_to_dict
from rest_framework import generics,status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from drf_yasg.utils import swagger_auto_schema

from products.serializers import AttachmentSerializer, CategorySerializer, DetailSerializer, ProductRegisterSerializer, ProductSerializer, CategorySwagger, ProductUpdateSerializer
from .models import Brand, Category, Detail, Product
from permissions.permissions import AgencyPermission
import json

MESSAGE = {
    'notfind':{
        'message':"Khong tim thay"
    },
    'delete':{
        'message':"Da xoa"
    }
}
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

def get_info_product(p):
    now = datetime.now()
    list_price = list(p.price.all())
    list_price.reverse()
    #Get price which are last and pre to compare price 
    last_price = None
    pre_price = None
    for price in list_price:    
        #When pre_price not present and last_price have value
        if not pre_price and last_price and not price.end_datetime:
            pre_price = price
            #if pre_price and last_price is present, we won't need to find anymore
            break
        
        if not last_price and (not price.end_datetime or price.end_datatime >= now):
                last_price = price 
        
    #Result of product
    instance = {
                'id':p.id,
                'name':p.name,
                'display_image':p.display_image,
                'is_delete':p.is_delete,
                'is_approved':p.is_approved,
                'category':[c.name for c in p.category.all()],
                'type':[t.name for t in p.type.all()],
                'brand':{
                    **model_to_dict(p.brand)
                },
                'detail':[{**model_to_dict(d)} for d in p.detail.all()],
                'quantity':p.quantity.last().quantity,
                'describe':p.describe and p.describe.content,
                'last_price':{
                    **model_to_dict(last_price)
                },
                'pre_price':
                    pre_price and {**model_to_dict(pre_price)} 
                ,
                'attachment':[{**model_to_dict(attach)} for attach in p.attachment.all()]
            }
    return instance

@swagger_auto_schema()
class ProductViewAll(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductRegisterSerializer
    
    def get_permissions(self):
        per = super().get_permissions()
        if self.request.method != "GET":
            return [*per,AgencyPermission()]
        else:
            return per
    
    def get(self,request):
        agency = request.user.user.agency
        product = Product.objects.filter(agency=agency)
        result = []
        for p in product:
            instance = get_info_product(p)
            result.append(instance)
        return Response(result)
    
    def post(self,request):
        serializer = ProductRegisterSerializer(data=request.data,context={'request':request})
        if serializer.is_valid():
            serializer.save(request=request)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

class ProductViewDetail(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductRegisterSerializer
    
    def get_permissions(self):
        per = super().get_permissions()
        if self.request.method != "GET":
            return [*per,AgencyPermission()]
        else:
            return per
    
    def get(self,request,id):
        try:
            agency = request.user.user.agency
            product = Product.objects.filter(agency=agency,id=id)
            instance = get_info_product(product[0])
            if product.is_delete:
                return Response(MESSAGE['notfind'],status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(instance)
        except Product.DoesNotExist:
            return Response(MESSAGE['notfind'],status=status.HTTP_400_BAD_REQUEST)
        
    @swagger_auto_schema(request_body=ProductUpdateSerializer)
    def patch(self,request ,id):
        agency = request.user.user.agency
        prod = Product.objects.filter(id=id,agency=agency,is_delete=False)
        if prod:
            p = ProductUpdateSerializer(prod[0],data=request.data,context={'request':request})
            if p.is_valid():
                p.save()
                return Response(get_info_product(prod[0]))
            else:
                return Response(p.errors,status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(MESSAGE['notfind'],status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,id):
        try:
            agency = request.user.user.agency
            product = Product.objects.get(agency=agency,id=id)
            product.is_delete = True
            product.save()
            return Response(MESSAGE['delete'],status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response(MESSAGE['notfind'],status=status.HTTP_400_BAD_REQUEST)
        
@swagger_auto_schema()
class WishList(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    
    def post(self,request,pid,**kwargs):
        customer = request.user.user.customer
        product = Product.objects.filter(id=pid)
        if customer and product and product not in customer.favorite_product.all():
            customer.favorite_product.add(product[0])
            return Response({"message":"Add successful"})
        else:
            return Response(MESSAGE['notfind'],status=status.HTTP_400_BAD_REQUEST)
            
    def delete(self,request,pid,**kwargs):
        customer = request.user.user.customer
        product = Product.objects.filter(id=pid)
        if customer and product:
            p = customer.favorite_product.remove(product[0])
            return Response({"message":"Delete succesful"})
        else:
            return Response(MESSAGE['notfind'])
        
@api_view(['GET'])
@permission_classes([IsAuthenticated])
@swagger_auto_schema(method='get')
def get_wish_list(request):
    customer = request.user.user.customer
    product = customer.favorite_product.all()
    result = []
    for p in product:
        instance = get_info_product(p)
        result.append(instance)
    return Response(result)