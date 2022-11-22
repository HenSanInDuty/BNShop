from unittest import result
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from rating.models import Rate, Reply

from rating.serializers import RateSerializer, ReplySerializer
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
        data['customer'] = customer.id
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
@swagger_auto_schema()      
class RatingViewReplyDetail(generics.GenericAPIView):
    serializer_class = RateSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self,request,id,**kwargs):
        rate = Rate.objects.filter(product_id=id)
        serializer = self.serializer_class(rate,many=True)
        result = []
        for instance in serializer.data:
            reply_objects = Reply.objects.filter(rate_id = instance.get('id')).all()
            if reply_objects:
                instance['reply'] =  reply_objects.values('content','user')
            
            result.append(instance)
            
        return Response(result)
    
@swagger_auto_schema()
class ReplyViews(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ReplySerializer
    
    def post(self,request,id,**kwargs):
        rate = Rate.objects.filter(id=id)
        user = request.user.user
        data = request.data
        data['user'] = user
        data['rate'] = rate[0]
        serializer = self.serializer_class(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
            