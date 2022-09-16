from rest_framework.response import Response
from rest_framework import generics,status
from rest_framework.permissions import IsAuthenticated
from . import serializers,models

TYPE_ADDRESS_CHOICES = ['home','company','brand']
# Create your views here.
class AddressViewAll(generics.GenericAPIView):
    serializer = serializers.AddressSerializer
    model = models.Address
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        address = request.user.user.address
        serializer = self.serializer(address.all(),many=True)
        return Response(serializer.data)
    
    def post(self,request):
        data = request.data
        data['user'] = request.user.id
        #Check user have any address ?
        if self.model.objects.count() == 0:
            data['is_default'] = True
        else:
        #If user change address default
            if 'is_default' in data:
                if data['is_default'] == "true":
                    address_was_default = self.model.objects.get(is_default=True)
                    address_was_default.is_default = False
                    address_was_default.save()
        #If user is agency, they will be confirm address of brand before add
        if request.user.is_agency:
            data['is_approved'] = False
        #Address have 3 type: home, company and brand
        if data['type'].lower() in TYPE_ADDRESS_CHOICES:
            serializer = self.serializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"message":"Something wrong"})
    
    def patch(self,request):
        data = request.data
        data['user'] = request.user.id
        if request.user.is_agency:
            return Response({"message":"You can't perform this action, please contact admin"})
        address = self.model.objects.get(id=data['id'])
        serializer = self.serializer(address,data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request):
        data = request.data
        data['user'] = request.user.id
        if request.user.is_agency:
            return Response({"message":"You can't perform this action, please contact admin"},status=status.HTTP_400_BAD_REQUEST)
        address = self.model.objects.get(id=data['id'])
        serializer = self.serializer(address)
        try:
            if address.is_default:
                return Response({"message":"Can't delete default address"})
            else:
                address.delete()
                return Response(serializer.data)
        except:
            return Response({"message":"Can't perform this action"},status=status.HTTP_400_BAD_REQUEST)
