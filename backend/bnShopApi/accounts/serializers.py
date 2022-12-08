from datetime import datetime
from email.policy import default
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers
from rest_framework.exceptions import PermissionDenied
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from django.contrib.auth import authenticate

from .models import Account, Agency, Customer, Users, Shipper


class MyTokenObtainPairViewSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['phone'] = user.phone
        return token

    def validate(self, attrs):
        # Take username and password from request
        phone = attrs.get('phone')
        password = attrs.get('password')

        if phone and password:
            # Try to authenticate the user using Django auth framework.
            user = authenticate(request=self.context.get('request'),
                                phone=phone, password=password)
            if not user:
                # If we don't have a regular user, raise a PermissionDenied
                msg = 'Access denied: wrong username or password.'
                raise PermissionDenied(msg,code="permission_denied")
        
        
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        if self.user.is_agency:
            role = 'Agency'
        if self.user.is_customer:
            role = 'Customer'
        if self.user.is_admin:
            role = 'Admin'
        if self.user.is_shipper:
            role = 'Shipper'

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['data'] = {
            'id': self.user.user.id if role != 'Admin' else self.user.id,
            'phoneNumber': self.user.phone,
            'role': role
        }
        return data
    


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairViewSerializer


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_message = {
        'bad_token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):

        try:
            RefreshToken(self.token).blacklist()

        except TokenError:
            self.fail('bad_token')


class ChangePasswordSerializer(serializers.Serializer):
    model = Account

    old_password = serializers.CharField(required=True)
    new_password1 = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)


class AccountSerializer(serializers.Serializer):
    role_choices = ['Agency','Customer','Shipper']
    model = Account
    
    phone = serializers.CharField(max_length=10,required=True)
    password1 = serializers.CharField(max_length=32,required=True)
    password2 = serializers.CharField(max_length=32,required=True)
    role = serializers.ChoiceField(role_choices)
    
class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Users
        fields = "__all__"

class CustomerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Customer
        fields = "__all__"
        
class AgencySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Agency
        fields = "__all__"

class ShipperSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Shipper
        fields = "__all__"
        
class CustomerRegister(serializers.Serializer):
    phone = serializers.CharField(max_length=10,required=True)
    password1 = serializers.CharField(max_length=32,required=True)
    password2 = serializers.CharField(max_length=32,required=True)
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(required = False)
    avatar = serializers.CharField(max_length=100,required = False,default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s")
    nationality = serializers.CharField(max_length=100,required = False)
    gender = serializers.CharField(max_length=1,required = False,default='M')
    time_visited = serializers.FloatField(default=0,required = False)
    nickname = serializers.CharField(max_length=100,required = False)
    birthday = serializers.DateField(default=datetime.today().strftime('%Y-%m-%d'),required = False)
    
class AgencyRegister(serializers.Serializer):
    phone = serializers.CharField(max_length=10,required=True)
    password1 = serializers.CharField(max_length=32,required=True)
    password2 = serializers.CharField(max_length=32,required=True)
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(required = False)
    avatar = serializers.CharField(max_length=100,required = False,default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s")
    nationality = serializers.CharField(max_length=100,required = False)
    gender = serializers.CharField(max_length=1,required = False,default='M')
    time_visited = serializers.FloatField(default=0,required = False)
    main_industry = serializers.CharField(max_length=100,required=True)
    identify = serializers.CharField(max_length=12,required=True)   

class ShipperRegister(serializers.Serializer):
    phone = serializers.CharField(max_length=10,required=True)
    password1 = serializers.CharField(max_length=32,required=True)
    password2 = serializers.CharField(max_length=32,required=True)
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(required = False)
    avatar = serializers.CharField(max_length=100,required = False,default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s")
    nationality = serializers.CharField(max_length=100,required = False)
    gender = serializers.CharField(max_length=1,required = False,default='M')
    time_visited = serializers.FloatField(default=0,required = False)
    companyName = serializers.CharField(max_length=3000,required = False)

class ProfileCustomerUpdateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, required=False)
    email = serializers.EmailField(required=False)
    avatar = serializers.CharField(max_length=3000,required=False)
    nationality = serializers.CharField(max_length=100,required=False)
    gender = serializers.CharField(max_length=1,required=False)
    nickname = serializers.CharField(max_length=100,required=False)
    birthday = serializers.DateField(required=False)