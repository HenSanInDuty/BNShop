from rest_framework import generics, status, serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes,api_view
from accounts.models import Users
from address.models import Address
from address.serializers import AddressSerializer
from manageadmin.serializers import OrderdetailToShipperSerializer
from orders.models import OrderDetail
from orders.serializers import ViewOrderDetailSerializer
from otherplatform.utilities import send_email
from permissions.permissions import AdminPermission
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from products.models import Product, Type as ProductType
from products.serializers import TypeSerializer
from products.views import get_info_product
from rating.models import Rate
from rating.serializers import RateSerializer
# Create your views here.

def get_profile_user(user):
        return_result = {
            'id':user.id,
            'name':user.name,
            'email':user.email,
            'avatar':user.avatar,
            'nationality':user.nationality,
            'is_active':user.account.is_active,
        }
        if user.account.is_customer:
            return_result['nickname']=user.customer.nickname
            return_result['birthday']=user.customer.birthday
            return_result['role']='Customer'

        if user.account.is_agency:
            return_result['main_industry'] = user.agency.main_industry
            return_result['identify'] = user.agency.identify
            return_result['role'] = 'Agency'
        if user.account.is_shipper:
            return_result['company_name'] = user.shipper.companyName 
            return_result['role'] = 'Shipper'
        return return_result

class AccountManageViewAll(generics.GenericAPIView):
  permission_classes = [IsAuthenticated,AdminPermission]

  type_param = openapi.Parameter('type', openapi.IN_QUERY, description="Neu type = 1 la agency, type = 2 la customer, type = 3 la tai khoan agency chua active, type = 4 la tai khoan agency da active", type=openapi.TYPE_STRING)
  @swagger_auto_schema(mehotd='get',manual_parameters=[type_param])
  def get(self,request):
    type = request.GET.get('type')
    account = []
    if type == None:
      account = Users.objects.filter(account__is_admin=False)
    else:
      user = Users.objects.select_related('account')
      if type == "1":
        account = user.filter(account__is_agency=True)
      elif type == "2":
        account = user.filter(account__is_customer =True)
      elif type == "3":
        account = user.filter(account__is_agency =True,account__is_active=False)
      elif type == "4":
        account = user.filter(account__is_agency =True,account__is_active=True)
    result = []
    for a in account:
      result.append(get_profile_user(a))
    return Response(result)

@api_view(http_method_names=['patch'])
@permission_classes([IsAuthenticated,AdminPermission])
@swagger_auto_schema(method='patch')
def activeUsers(request,idUser):
  user = Users.objects.filter(id=idUser).first()
  if user:
    user.account.is_active = True
    user.account.save()
    email_user = user.email
    send_email(email_user,"Thông báo tài khoản","Shop bán hàng của bạn đã được chấp thuận, chào mừng bạn đến với BNShop!")
    return Response({"detail":"Active user success"})
  return Response()

@api_view(http_method_names=['patch'])
@permission_classes([IsAuthenticated,AdminPermission])
@swagger_auto_schema(method='patch')
def deactiveUsers(request,idUser):
  user = Users.objects.filter(id=idUser).first()
  if user:
    user.account.is_active = False
    user.account.save()
    email_user = user.email
    send_email(email_user,"Thông báo tài khoản","Shop bán hàng của bạn đã bị hủy, vui lòng liên hệ với admin để biết thêm chi tiết. Chúng tối xin lỗi vì sự bất tiện này!")
    return Response({"detail":"Deactive user success"})
  return Response()

class TypeProductManageViewAll(generics.GenericAPIView):
  serializer_class = TypeSerializer
  permission_classes = [IsAuthenticated, AdminPermission]

  def get(self,request):
    all_type = ProductType.objects.all()
    serializer = self.serializer_class(all_type,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = self.serializer_class(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    else:
      return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class TypeProductManageViewDetail(generics.GenericAPIView):
  serializer_class = TypeSerializer
  permission_classes = [IsAuthenticated, AdminPermission]

  def get(self,request, typeId):
    all_type = ProductType.objects.filter(id=typeId).first()
    serializer = self.serializer_class(all_type)
    return Response(serializer.data)

  def patch(self,request, typeId):
    type_product = ProductType.objects.filter(id=typeId).first()
    serializer = self.serializer_class(type_product,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    else:
      return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class ProductManageViewAll(generics.GenericAPIView):
  permission_classes = [IsAuthenticated,AdminPermission]
  type_param = openapi.Parameter('type', openapi.IN_QUERY, description="Neu type = 1 la san pham chua approved, type = 2 la san pham da approved, type = 3 la san pham bi xoa ", type=openapi.TYPE_STRING)
  agency_param = openapi.Parameter('agency', openapi.IN_QUERY, description="Nhap id cua user agency", type=openapi.TYPE_INTEGER)
  
  @swagger_auto_schema(mehotd='get',manual_parameters=[type_param,agency_param])
  def get(self,request):
    type = request.GET.get('type')
    agency = request.GET.get('agency')
    products = Product.objects.all()
    result = []
    if not agency == None:
      agency = Users.objects.filter(id=agency).first().agency
      if not agency:
        raise serializers.ValidationError({"detail":"Can't find"})
      # If agency has present
      products = products.filter(agency=agency)
    if not type == None :
      if type == "1":
        products = products.filter(is_approved = False,is_delete=False)
      elif type == "2":
        products = products.filter(is_approved = True,is_delete=False)
      elif type == "3":
        products = products.filter(is_delete=True)
      for p in products:
        result.append(get_info_product(p))
    return Response(result)

@api_view(http_method_names=['patch'])
@permission_classes([IsAuthenticated,AdminPermission])
@swagger_auto_schema(method='patch')
def activeProduct(request,productId):
  product = Product.objects.filter(id=productId).first()
  if product:
    product.is_approved = True
    product.save()
    email_user = product.agency.user.email
    send_email(email_user,"Xác nhận sản phẩm","Sản phẩm của bạn đã được chấp thuận")
    return Response({"detail":"Active product success"})
  else:
    return Response({"detail":"Active product unsuccess"},status=status.HTTP_400_BAD_REQUEST)

@api_view(http_method_names=['delete'])
@permission_classes([IsAuthenticated,AdminPermission])
@swagger_auto_schema(method='delete')
def deleteProduct(request,productId):
  product = Product.objects.filter(id=productId).first()
  if product:
    product.is_delete = True
    product.save()
    email_user = product.agency.user.email
    send_email(email_user,"Xác nhận sản phẩm","Sản phẩm của bạn đã bị hủy, vui lòng liên hệ với admin để biết thêm chi tiết")
    return Response({"detail":"Delete product success"})
  else:
    return Response({"detail":"Delete product unsuccess"},status=status.HTTP_400_BAD_REQUEST)

class RatingViewAll(generics.GenericAPIView):
  permission_classes = [IsAuthenticated,AdminPermission]
  type_param = openapi.Parameter('type', openapi.IN_QUERY, description="Neu type = 1 la rating chua approved, type = 2 la rating da approved ", type=openapi.TYPE_STRING)
  
  @swagger_auto_schema(mehotd='get',manual_parameters=[type_param])
  def get(self,request):
    type = request.GET.get('type')
    all_rating = Rate.objects.all()
    if not type == None:
      if type == 1:
        all_rating = all_rating.filter(is_approved=False)
      elif type == 2:
        all_rating = all_rating.filter(is_approved=True)

    serializer = RateSerializer(all_rating,many=True)
    return Response(serializer.data)


@api_view(http_method_names=['patch'])
@permission_classes([IsAuthenticated,AdminPermission])
@swagger_auto_schema(method='patch')
def activeRate(request,rateId):
  rate = Rate.objects.filter(id=rateId).first()
  if rate:
    rate.is_approved = True
    rate.save()
    return Response({"detail":"Active rate success"})
  else:
    return Response({"detail":"Active rate unsuccess"},status=status.HTTP_400_BAD_REQUEST)

@api_view(http_method_names=['delete'])
@permission_classes([IsAuthenticated,AdminPermission])
@swagger_auto_schema(method='delete')
def deleteRate(request,ratetId):
  rate = Rate.objects.filter(id=ratetId).first()
  if rate:
    rate.delete()
    return Response({"detail":"Delete rate success"})
  else:
    return Response({"detail":"Delete rate unsuccess"},status=status.HTTP_400_BAD_REQUEST)

class AddressViewAll(generics.GenericAPIView):
  permission_classes = [IsAuthenticated,AdminPermission]
  type_param = openapi.Parameter('type', openapi.IN_QUERY, description="Neu type = 1 la address chua approved", type=openapi.TYPE_STRING)
  
  @swagger_auto_schema(manual_parameters=[type_param])
  def get(self,request):
    type = request.GET.get('type')
    all_address = Address.objects.all()
    if not type == None:
      if type == 1:
        all_address = all_address.filter(is_approved=False)

    serializer = AddressSerializer(all_address,many=True)
    return Response(serializer.data)

class AddressViewDetail(generics.GenericAPIView):
  permission_classes = [IsAuthenticated,AdminPermission]
  
  def patch(self,request,id):
    address = Address.objects.get(id=id)
    address.is_approved = True
    address.save()
    email_user = address.user.email
    send_email(email_user,"Xác nhận địa chỉ","Địa chỉ của bạn đã được chấp thuận")
    return Response({"detail":"Active address success"})

  def delete(self,request,id):    
    address = Address.objects.get(id=id)
    address.is_approved = False
    address.save()
    email_user = address.user.email
    send_email(email_user,"Xác nhận địa chỉ","Địa chỉ của bạn đã bị từ chối, vui lòng liên hệ admin để biết thêm chi tiết.")
    return Response({"detail":"Disactive address success"})

class OrderDetailViewAll(generics.GenericAPIView):
  permission_classes = [IsAuthenticated, AdminPermission]
  status_param = openapi.Parameter('status', openapi.IN_QUERY, description="Neu type = 1 la rating chua approved, type = 2 la rating da approved ", type=openapi.TYPE_STRING)
  
  @swagger_auto_schema(manual_parameters=[status_param])
  def get(self,request):
    all_orderdetail = OrderDetail.objects.all()
    status = request.GET.get('status')
    if status:
      all_orderdetail = OrderDetail.objects.filter(status=status)
    
    serializers = ViewOrderDetailSerializer(all_orderdetail,many=True)
    return Response(serializers.data)

class OrderDetailToShipper(generics.GenericAPIView):
  permission_classes = [IsAuthenticated, AdminPermission]
  
  @swagger_auto_schema(request_body=OrderdetailToShipperSerializer)
  def patch(self,request,id):
    shipper = Users.objects.filter(id = id).first()
    if not shipper:
      return Response({"detail":"Can't find this user"},status = status.HTTP_404_NOT_FOUND)
    if not shipper.account.is_shipper:
      return Response({"detail":"This guy isn't a shipper"},status=status.HTTP_400_BAD_REQUEST)
    #Get order detail which has status shipping
    order_detail_result = OrderDetail.objects.filter(id__in = request.data['order_detail'],
                                                    status="3")
    if order_detail_result.count() != len(request.data['order_detail']):
      return Response({"detail":"Please enter right order detail id with status shipping and don't have any shipper in this"},status=status.HTTP_404_NOT_FOUND)
    order_detail_result.update(shipper=shipper.shipper)
    serializers = ViewOrderDetailSerializer(order_detail_result,many=True)
    return Response(serializers.data)
