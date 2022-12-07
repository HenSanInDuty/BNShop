import re,sys
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from permissions.permissions import AgencyPermission

from .models import Account, Agency, Customer, Users
from .serializers import AgencyRegister, ProfileCustomerUpdateSerializer, AgencySerializer, CustomerRegister, CustomerSerializer, LogoutSerializer, AccountSerializer, ShipperRegister, ShipperSerializer, UserSerializer, ChangePasswordSerializer
from django.db.utils import IntegrityError

from .utilities import get_tokens_for_user
# Create your views here.

def register(request,role):
    model = Account
    data = request.data
    data['role'] = role
    serializer = AccountSerializer(data=data)
    #Account create
    if (serializer.is_valid()):
        role = serializer.data.get('role')
        #Check phone
        check_phone = re.search("^\d{10}$",serializer.data.get('phone'))
        if not check_phone:
            return Response({"phone":"Phone must only contains 10 digit"})
        #Check password
        check_password = re.search("^.{8,32}$",serializer.data.get('password1'))
        if not check_password:
            return Response({"password":"Password must have 8-32 letter"})
        #Check confirm password
        if serializer.data.get('password1') != serializer.data.get('password2'):
            return Response({"password":"password1 must equal password2"})
        #Create new account
        try:
            if role == 'Customer':
                new_account = model.objects.create_customeruser(phone = serializer.data.get('phone'), 
                                           password =serializer.data.get('password1'))
            if role == 'Shipper':
                new_account = model.objects.create_shipperuser(phone = serializer.data.get('phone'), 
                                           password =serializer.data.get('password1'))                                           
            elif role == "Agency":
                new_account = model.objects.create_agencyuser(phone = serializer.data.get('phone'), 
                                           password =serializer.data.get('password1'))
        except IntegrityError:
            exist_phone = model.objects.get(phone=serializer.data.get('phone'))
            if exist_phone:
                return Response({
                    'phone':'Phone have used'
                },status=status.HTTP_400_BAD_REQUEST)
            else:
                new_account.delete()
                return Response({
                    'message':"Something wrong"
                },status=status.HTTP_400_BAD_REQUEST)
        #Create new user
        try:
            data['account'] = new_account.id
            user_serializer = UserSerializer(data = data)
            if user_serializer.is_valid():
                new_user = user_serializer.save()
            else:
                new_account.delete()
                return Response(user_serializer.errors)
            
            data['user'] = new_user.id
            #Create Customer or Agency or Shipper
            if role == "Customer":
                customer_serializer = CustomerSerializer(data=data)
                if customer_serializer.is_valid():
                    customer_serializer.save()
                else:
                    new_account.delete()
                    return Response(customer_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            elif role == "Agency":
                agency_serializer = AgencySerializer(data=data)
                if agency_serializer.is_valid():
                    agency_serializer.save()
                else:
                    new_account.delete()
                    return Response(agency_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            elif role == "Shipper":
                shipper_serializer = ShipperSerializer(data=data)
                if shipper_serializer.is_valid():
                    shipper_serializer.save()
                else:
                    new_account.delete()
                    return Response(shipper_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"role":"Don't have this role now"},status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response({
                    'message':"Something wrong"
                },status=status.HTTP_400_BAD_REQUEST)
        #Create token
        token = get_tokens_for_user(new_account)
        return Response({
            'id':new_account.user.id,
            'phone':new_account.phone,
            **token
        })
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@swagger_auto_schema(method='post',request_body=AgencyRegister)
@api_view(['POST'])
def register_agency(request):
    return register(request,'Agency')

@swagger_auto_schema(method='post',request_body=CustomerRegister)
@api_view(['POST'])
def register_customer(request):
    return register(request,'Customer')

@swagger_auto_schema(method='post',request_body=ShipperRegister)
@api_view(['POST'])
def register_shipper(request):
    return register(request,'Shipper')
    
class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response({'message':'Log out success'},status=status.HTTP_204_NO_CONTENT)
        except AssertionError:
            return Response({"message":"This token isn't exist"})

class ChangePasswordView(generics.UpdateAPIView):
    
    serializer_class = ChangePasswordSerializer
    model = Account
    permission_classes = [IsAuthenticated]
    
    def get_object(self, queryset = None):
        obj = self.request.user
        return obj
    
    def patch(self,request,*arg,**kwargs):
        try:
            #Get user
            self.object = self.get_object()
            serializer = self.get_serializer(data = request.data)
            if serializer.is_valid():
                if not self.object.check_password(serializer.data.get("old_password")):
                    return Response({"old_password":"Wrong password"},status=status.HTTP_400_BAD_REQUEST)

                if serializer.data.get("new_password1") != serializer.data.get("new_password2"):
                    return Response({"new_password":"New Password is not match"},status=status.HTTP_400_BAD_REQUEST)
                
                self.object.set_password(serializer.data.get("new_password1"))
                self.object.save()
                response = {
                    'status': 'success',
                    'code': status.HTTP_200_OK,
                    'message': 'Password updated successfully',
                    'data': []
                }
                
                return Response(response)
        except Exception:
            print(sys.exc_info()[0])

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Profile User
def get_profile_user(user):
        return_result = {
            'id':user.id,
            'name':user.name,
            'email':user.email,
            'avatar':user.avatar,
            'nationality':user.nationality
        }
        role = "Shipper"
        if user.account.is_customer:
            return_result['nickname']=user.customer.nickname
            return_result['birthday']=user.customer.birthday
            role = 'Customer'

        if user.account.is_agency:
            return_result['main_industry'] = user.agency.main_industry
            return_result['identify'] = user.agency.identify
            role = 'Agency'
        
        return_result['role'] = role
        return return_result

class ProfileView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = AccountSerializer
    model = Users
    
    def get(self,request):
        user = self.model.objects.get(id=request.user.user.id)
        return_result = get_profile_user(user)
        return Response(return_result)

    @swagger_auto_schema(request_body=ProfileCustomerUpdateSerializer)
    def patch(self,request):
        user = self.model.objects.get(id=request.user.user.id)
        if user.account.is_agency:
            return Response({"message":"You can't perform this action, please contact admin"})
        data = request.data
        data['account'] = user.account.id
        data['user'] = user.id
        
        #Check email unique
        if 'email' in data:
            email = data['email']
            user_with_this_email = self.model.objects.filter(email=email)
            if user_with_this_email.count() > 0:
                return Response({"email":"That email has used"})
        
        general_profile = UserSerializer(user,data= data)
        specific_profile = CustomerSerializer(user.customer,data=data)
        if general_profile.is_valid():
            if specific_profile.is_valid():
                general_profile.save()
                specific_profile.save()
                user = self.model.objects.get(id=request.user.user.id)
                return Response(get_profile_user(user))
            else:
                return Response(specific_profile.errors)
        else:
            return Response(general_profile.errors)

class ProfileViewOne(generics.GenericAPIView):
    permission_classes = [IsAuthenticated,AgencyPermission]
    serializer_class = AccountSerializer
    model = Users
    
    def get(self,request,idUser):
        user = self.model.objects.filter(id=idUser).first()
        if user and not user.account.is_admin:
            return_result = get_profile_user(user)
            return Response(return_result)
        return Response(status=status.HTTP_404_NOT_FOUND)
