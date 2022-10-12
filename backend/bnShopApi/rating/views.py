from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from rating.models import Rate

from rating.serializers import RateSerializer
# Create your views here.
@swagger_auto_schema()
class RatingViewAll(generics.GenericAPIView):
    serializer_class = RateSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self,request,**kwargs):
        customer = request.user.user.customer
        rates = Rate.objects.filter(customer=customer)
        serializer = self.serializer_class(rates,many=True)
        return Response(serializer.data)
    
    def post(self,request,**kwargs):
        data = request.data
        customer = request.user.user.customer
        data['customer'] = customer
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
class RatingViewDetail(generics.GenericAPIView):
    serializer_class = RateSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self,request,id,**kwargs):
        rate = Rate.objects.filter(id=id)
        serializer = self.serializer_class(rate)
        return Response(serializer.data)
    
    def patch(self,request,id,**kwargs):
        data = request.data
        customer = request.user.user.customer
        data['customer'] = customer
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)