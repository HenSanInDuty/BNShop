import re
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view

from accounts.models import Account
from .serializers import AgencySerializer, CustomerSerializer, LogoutSerializer, AccountSerializer, UserSerializer
from django.db.utils import IntegrityError

from .utilities import get_tokens_for_user
# Create your views here.

@api_view(['POST'])
def register(request):
    model = Account
    data = request.data
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
            else:
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
            #Create Customer or Agency
            if role == "Customer":
                new_account.is_customer = True
                new_account.save()
                customer_serializer = CustomerSerializer(data=data)
                if customer_serializer.is_valid():
                    new_customer = customer_serializer.save()
                else:
                    new_account.delete()
                    return Response(customer_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            else:
                new_account.is_agency = True
                new_account.save()
                agency_serializer = AgencySerializer(data=data)
                if agency_serializer.is_valid():
                    new_agency = agency_serializer.save()
                else:
                    new_account.delete()
                    return Response(agency_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
                
        except:
            return Response({
                    'message':"Something wrong"
                },status=status.HTTP_400_BAD_REQUEST)
        #Create token
        token = get_tokens_for_user(new_account)
        return Response({
            'id':new_account.id,
            'phone':new_account.phone,
            **token
        })
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
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



