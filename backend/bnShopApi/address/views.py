from rest_framework.response import Response
from rest_framework import generics

# Create your views here.
class AddressViewAll(generics.GenericAPIView):
    
    def get(self,request):
        print(request.user)
        return Response({"message":"hello"})