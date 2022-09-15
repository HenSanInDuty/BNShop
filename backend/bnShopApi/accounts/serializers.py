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