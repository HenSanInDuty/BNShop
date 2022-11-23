from django.shortcuts import render
from rest_framework import generics, status
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes,api_view
from accounts.models import Users
from permissions.permissions import AdminPermission
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
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

  type_param = openapi.Parameter('type', openapi.IN_QUERY, description="Neu type = 1 la agency, type = 2 la customer, type = 3 la tai khoan agency chua active", type=openapi.TYPE_STRING)
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
    return Response({"detail":"Deactive user success"})
  return Response()
