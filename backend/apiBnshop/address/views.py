from ast import Add
import sys

from shutil import ExecError
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from user import serializers

from .serializers import AddressSerializers
from .models import AddressProfile
# Create your views here.

class AddressView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    
    def get(self,request,*arg):
        try:
            user = request.user
            
            addresses = AddressProfile.objects.all().filter(user=user)
            serializer = AddressSerializers(addresses, many=True)
            #print(serializer)
            return Response(serializer.data)
        except Exception:
            print(sys.exc_info()[0])
            
    def post(self,request,*arg):
        user = request.user
        #Add user into request data
        requestAdd = request.data
        requestAdd._mutable = True
        requestAdd['user'] = user.id
        
        serializer = AddressSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def patch(self,request,*arg):
        user = request.user
        #Add user into request data
        try:
            address = AddressProfile.objects.get(user=user,id=request.data.get('id'))
            requestAdd = request.data
            requestAdd._mutable = True
            requestAdd['user'] = user.id
            serializer = AddressSerializers(address,data=requestAdd,partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)      
        except AddressProfile.DoesNotExist:
            return Response({'message':'Not found this address'})
        
    
    def delete(self,request,*arg):
        idAddress = request.data.get("id")
        try:
            if AddressProfile.objects.get(id=idAddress,user=request.user).delete():
                return Response({"message":"Delete success"})
            else:
                return Response({"message":"Delete unsuccess"})
        except AddressProfile.DoesNotExist:
            return Response({"message":"Delete unsuccess"})