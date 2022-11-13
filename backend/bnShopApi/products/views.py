from collections import OrderedDict
from datetime import datetime
from django.core.paginator import Paginator
from django.forms.models import model_to_dict
from rest_framework import generics,status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from drf_yasg.utils import swagger_auto_schema

from products.serializers import AttachmentSerializer, CategorySerializer, DetailSerializer, ProductRegisterSerializer, ProductSerializer, CategorySwagger, ProductUpdateSerializer, ReportProductSerializer, TypeSerializer
from .models import Brand, Category, Detail, Product, Quantity, Type
from permissions.permissions import AgencyPermission

from rating.models import Rate
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
    
@swagger_auto_schema()
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
        
@swagger_auto_schema()     
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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def product_agency(request,agencyid):
    product = Product.objects.filter(agency = agencyid)
    result = []
    for p in product:
        instance = get_info_product(p)
        result.append(instance)
    return Response(result)

@swagger_auto_schema()
class ProductViewAll(generics.GenericAPIView):
    permission_classes = []
    serializer_class = ProductRegisterSerializer
    pagination_class = PageNumberPagination

    def get_permissions(self):
        per = super().get_permissions()
        if self.request.method != "GET":
            return [*per,IsAuthenticated(),AgencyPermission()]
        else:
            return per
    
    def get(self,request,**kwargs):
        product = Product.objects.all()
        result = []
        for p in product:
            instance = get_info_product(p)
            result.append(instance)

        if request.GET.get('page'):
            page = Paginator(result,10)
            if int(request.GET.get('page')) > page.num_pages:
                return Response({
                    'message':'Only have ' + str(page.num_pages) + ' pages'
                },status=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE)
        
            return Response(page.page(request.GET.get('page')).object_list)

        return Response(result)
    
    def post(self,request):
        serializer = ProductRegisterSerializer(data=request.data,context={'request':request})
        if serializer.is_valid():
            serializer.save(request=request)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
@swagger_auto_schema()
class ProductViewDetail(generics.GenericAPIView):
    permission_classes = []
    serializer_class = ProductRegisterSerializer
    
    def get_permissions(self):
        per = super().get_permissions()
        if self.request.method != "GET":
            return [*per,IsAuthenticated(),AgencyPermission()]
        else:
            return per
    
    def get(self,request,id):
        try:
            product = Product.objects.filter(id=id)
            instance = get_info_product(product[0])
            if product[0].is_delete or not product[0].is_approved:
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
    serializer_class = ProductSerializer
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
            customer.favorite_product.remove(product[0])
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

@swagger_auto_schema()
class Report(generics.GenericAPIView):
    permission_classes = [IsAuthenticated,AgencyPermission]
    serializer_class = ReportProductSerializer
    def post(self,request,**kwargs):
        QUARTER = {
            '1':[1,2,3],
            '2':[4,5,6],
            '3':[7,8,9],
            '4':[10,11,12]
        }

        MIDYEAR = {
            '1':[1,2,3,4,5,6],
            '2':[7,8,9,10,11,12]
        }

        type = request.data.get('type')
        detail = request.data.get('detail')
        agency = request.user.user.agency
        product_agency = Product.objects.filter(agency=agency).all()
        
        # Month
        if type == "1":
            all_quantity = Quantity.objects.filter(from_date__month=detail,
                                                note='User buy items',
                                                product__in=product_agency)
            if not all_quantity:
                return Response({"message":"Zero product were selled in this month"}) 
        # Quarter
        elif type == "2":
            
            all_quantity = Quantity.objects.filter(from_date__month__in=QUARTER[str(detail)],
                                                note='User buy items',
                                                product__in=product_agency)
            if not all_quantity:
                return Response({"message":"Zero product were selled in this quarter"}) 
        # MidYear
        elif type == "3":
            all_quantity = Quantity.objects.filter(from_date__month__in=MIDYEAR[str(detail)],
                                                note='User buy items',
                                                product__in=product_agency)
            if not all_quantity:
                return Response({"message":"Zero product were selled in this midyear"}) 
        # Year
        elif type == "4":
            all_quantity = Quantity.objects.filter(from_date__year=datetime.now().year,
                                                note='User buy items',
                                                product__in=product_agency)
            if not all_quantity:
                return Response({"message":"Zero product were selled in this year"}) 
        else:
            return Response({},status=status.HTTP_400_BAD_REQUEST)
        
        result = OrderedDict()
        for rep in all_quantity:
            key = str(rep.product.id)
            value = rep.change_num
            if key in result.keys():
                result.update({str(rep.product.id):result[key]+value})
            else:
                result[key] = value    
        compare_list = list(result.keys())
        result_return = {'slowestSeller':compare_list[0],'bestSeller':compare_list[-1]}
        return Response(result_return)

@swagger_auto_schema()
class RateReturn(generics.GenericAPIView):
    permission_classes = [IsAuthenticated,AgencyPermission]
    def get(self,request,**kwargs):
        agency = request.user.user.agency
        product_agency = Product.objects.filter(agency=agency).all()
        all_quantity = Quantity.objects.filter(product__in = product_agency,
                                                note='User buy items')
        result = {}
        for rep in all_quantity:
            customer = 'customer-'+str(rep.customer.id)
            info = {'product':rep.product.id,
                    'num_buy':rep.change_num}
            if customer in result.keys():
                result[customer].append(info)
            else:
                result[customer] = [info]    
        return_customer = 0
        for cus,infor in result.items():
            if len(infor) > 1:
                return_customer +=1
        return_percent = return_customer/len(result.keys()) * 100

        result['statistical'] = {
            'number_of_customer':len(result.keys()),
            'return_percent': return_percent,
            'unreturn_percent': 100 - return_percent
        }
        return Response(result)

@swagger_auto_schema()
class SatisfactionLevel(generics.GenericAPIView):
    permission_classes = [IsAuthenticated,AgencyPermission]

    def get(self,request,**kwargs):
        agency = request.user.user.agency
        product_agency = Product.objects.filter(agency=agency).all()
        all_rate = Rate.objects.filter(product__in = product_agency)
        rate_negative_total = 0
        rate_netraul_total = 0
        rate_positive_total = 0
        result = {}
        #Statistical
        for rate in all_rate:
            product = "product-"+str(rate.product.id)
            star = rate.star

            if star < 0:
                star = 1
            
            if star > 5:
                star = 5

            if star in [1,2]:
                rate_negative_total += 1

            if star in [3,4]:
                rate_netraul_total += 1

            if star in [5]:
                rate_positive_total += 1

            if product in result.keys():
                if star in [1,2]:
                    result[product].update({'negative':result[product]['negative']+1})
                elif star in [3,4]:
                    result[product].update({'neutral':result[product]['neutral']+1})
                elif star in [5]:
                    result[product].update({'positive':result[product]['positive']+1})
                
                result[product].update({'total_star':result[product]['total_star']+star})
                result[product].update({'total_rate':result[product]['total_rate']+1})
            else:
                if star in [1,2]:
                    result[product] = {'negative':1}
                elif star in [3,4]:
                    result[product] = {'neutral':1}
                elif star in [5]:
                    result[product] = {'positive':1}

                result[product]['total_star'] = star
                result[product]['total_rate'] = 1

        for product,value in result.items():
            result[product]['avarage_rate'] = value['total_star'] / value['total_rate']

        result['total_negative'] = rate_negative_total
        result['total_neutral'] = rate_netraul_total
        result['total_positive'] = rate_positive_total
        return Response(result)

class TypeProductViewAll(generics.GenericAPIView):
    serializer_class = TypeSerializer
    permission_classes = [IsAuthenticated]

    def get(self,request,**kWargs):
        all_type = Type.objects.all()
        serializer = self.serializer_class(all_type,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)


