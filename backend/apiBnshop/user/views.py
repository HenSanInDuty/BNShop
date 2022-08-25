from math import perm
from urllib import response
from xmlrpc.client import ResponseError
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from django.contrib.auth.models import User

from address.forms import AddressForm
from address.models import AddressProfile
from .serializers import ChangePasswordSerializer, LogoutSerializer
from .utilities import get_tokens_for_user
from .forms import AgencyRegisterForm, UserRegisterForm
from customer.forms import CustomerForm
from customer.models import CustomerProfile
from angency.models import AgencyProfile
from permission.permission import OwnerPermission
import sys
# Create your views here.

rolesValid = ('Admin', 'Customer', 'Agency')

def getRoleOfUser(request):
    return JWTAuthentication().authenticate(request)[1]['role']

def getValueInForm(form, key):
    return form.cleaned_data.get(key)    

def getAddressOfUser(user):
    listAddress = list(user.address.all())
    result = []
    for address in listAddress:
        record = {}
        record['dc_tinh']=address.dc_tinh
        record['dc_quan']=address.dc_quan
        record['dc_phuong']=address.dc_phuong
        record['dc_chitiet']=address.dc_chitiet
        result.append(record)
    return result

@api_view(['POST'])
def register(request):
    try:
        #Init some form
        form = UserRegisterForm(request.data)
        subform = AgencyRegisterForm(request.data)
        cusform = CustomerForm(request.data)
        addressForm = AddressForm(request.data)
        if form.is_valid():
            # Check role is valid
            role = form.cleaned_data.get('role')
            if (role not in rolesValid):
                return Response({'role':'Role is not valid'})
            else:
                #Save init user
                user = form.save()
                user.refresh_from_db()
                user.accountProfile.role = role
                #Form register for agency
                if (role == 'Agency'):
                    if subform.is_valid():
                        AgencyProfile.objects.create(user=user,
                                                     dl_name=getValueInForm(subform,'dl_name'),
                                                     dl_email=getValueInForm(subform,'dl_email'),
                                                     dl_sdt=user.username,
                                                     dl_cmnd=getValueInForm(subform,'dl_cmnd'))
                        if (getValueInForm(subform,'dl_avatar')!=""):
                            user.profile.dl_avatar = getValueInForm(subform,'dl_avatar')
                        user.profile.save()
                    else:
                        user.delete()
                        return Response(subform.errors)
                #Form register for customer
                elif (role == 'Customer'):
                    if cusform.is_valid():
                        CustomerProfile.objects.create(user=user,
                                                       kh_ho=getValueInForm(cusform,'kh_ho'),
                                                       kh_ten=getValueInForm(cusform,'kh_ten'),
                                                       kh_email=getValueInForm(cusform,'kh_email'),
                                                       kh_sdt=user.username,
                                                       kh_ngay_sinh=getValueInForm(cusform,'kh_ngay_sinh'),
                                                       kh_gioi_tinh=getValueInForm(cusform,'kh_gioi_tinh'))
                        if (getValueInForm(cusform,'kh_avatar')!=""):
                            user.cus_profile.kh_avatar=getValueInForm(cusform,'kh_avatar')
                        user.cus_profile.save()
                    else:
                        user.delete()
                        return Response(cusform.errors)
                #After fill profile then user fill the address form
                if addressForm.is_valid():
                    AddressProfile.objects.create(user=user,
                                                  dc_tinh=getValueInForm(addressForm,'dc_tinh'),
                                                  dc_quan=getValueInForm(addressForm,'dc_quan'),
                                                  dc_phuong=getValueInForm(addressForm,'dc_phuong'),
                                                  dc_chitiet=getValueInForm(addressForm,'dc_chitiet'))
                    
                else:
                    user.delete()
                    return Response(addressForm.errors)
                user.save()
                token = get_tokens_for_user(user)
            #Token with access and refresh
            return Response({'data':{'id':user.id,'phoneNumber':user.username},**token})
        return Response(form.errors)
    except Exception:
        print(sys.exc_info()[0])
        #Roll back when have exception
        user.delete()
        
        
class Profile(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,OwnerPermission)
    
    def get(self,request,id):
        role = getRoleOfUser(request)
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return Response({'message':'Not found this user'})
        if (role == 'Customer'):
            return Response({
                'kh_ho': user.cus_profile.kh_ho,
                'kh_ten': user.cus_profile.kh_ten,
                'kh_sdt': user.username,
                'kh_avatar': user.cus_profile.kh_avatar,
                'kh_email': user.cus_profile.kh_email,
                'kh_ngay_sinh': user.cus_profile.kh_ngay_sinh,
                'kh_gioi_tinh': user.cus_profile.kh_gioi_tinh,
                'dc':getAddressOfUser(user)
            })
        else:
            return Response({
                'dl_name':user.profile.dl_name,
                'dl_avatar':user.profile.dl_avatar,
                'dl_email':user.profile.dl_email,
                'dl_cmnd':user.profile.dl_cmnd,
                'dc':getAddressOfUser(user)
            })
        
    def patch(self,request,id):
        role = getRoleOfUser(request)
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return Response({'message':'Not found this user'})
        if (role == 'Customer'):
            cusform = CustomerForm(request.data)
            
            if cusform.is_valid():
                
                user.cus_profile.kh_ho = getValueInForm(cusform,'kh_ho')
                user.cus_profile.kh_ten = getValueInForm(cusform,'kh_ten')
                user.cus_profile.kh_avatar = getValueInForm(cusform,'kh_avatar')
                user.cus_profile.kh_email = getValueInForm(cusform,'kh_email')
                user.cus_profile.kh_ngay_sinh = getValueInForm(cusform,'kh_ngay_sinh')
                
                return Response({
                    'kh_ho': user.cus_profile.kh_ho,
                    'kh_ten': user.cus_profile.kh_ten,
                    'kh_sdt': user.username,
                    'kh_avatar': user.cus_profile.kh_avatar,
                    'kh_email': user.cus_profile.kh_email,
                    'kh_ngay_sinh': user.cus_profile.kh_ngay_sinh,
                    'kh_gioi_tinh': user.cus_profile.kh_gioi_tinh,
                    'dc':getAddressOfUser(user)
                })
            else:
                return Response(cusform.errors)
        else:
            subform = AgencyRegisterForm(request.data)
            
            if subform.is_valid():
                user.profile.dl_avatar = getValueInForm(cusform,'dl_avatar')
                
                return Response({
                    'dl_name':user.profile.dl_name,
                    'dl_avatar':user.profile.dl_avatar,
                    'dl_email':user.profile.dl_email,
                    'dl_cmnd':user.profile.dl_cmnd,
                    'dc':getAddressOfUser(user)
                })
            else:
                return Response(subform.errors)

class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    permission_classes = (IsAuthenticated)

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'message':'Log out success'},status=status.HTTP_204_NO_CONTENT)
    
class ChangePasswordView(generics.UpdateAPIView):
    
    serializer_class = ChangePasswordSerializer
    model = User
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

    
    
    