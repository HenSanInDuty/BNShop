from datetime import datetime
from email.policy import default
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

from .models import Account, Agency, Customer, Users


class MyTokenObtainPairViewSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['phone'] = user.phone
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['data'] = {
            'id': self.user.id,
            'phoneNumber': self.user.phone
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
    role_choices = ['Agency','Customer']
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
        
class CustomerRegister(serializers.Serializer):
    phone = serializers.CharField(max_length=10,required=True)
    password1 = serializers.CharField(max_length=32,required=True)
    password2 = serializers.CharField(max_length=32,required=True)
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(required = False)
    avatar = serializers.CharField(max_length=100,required = False,default="data:image/png;base64,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")
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
    avatar = serializers.CharField(max_length=100,required = False,default="data:image/png;base64,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")
    nationality = serializers.CharField(max_length=100,required = False)
    gender = serializers.CharField(max_length=1,required = False,default='M')
    time_visited = serializers.FloatField(default=0,required = False)
    main_industry = serializers.CharField(max_length=100,required=True)
    identify = serializers.CharField(max_length=12,required=True)   