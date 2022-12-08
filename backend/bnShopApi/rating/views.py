from datetime import datetime
from django.utils import timezone
from rest_framework import generics, serializers, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from products.models import Product
from rating.models import Rate, Reply

from rating.serializers import CreateRateSerializer, RateSerializer, ReplySerializer
# Create your views here.
@swagger_auto_schema()
class RatingViewAll(generics.GenericAPIView):
    serializer_class = RateSerializer

    def get_permissions(self):
        if self.request.method != "GET":
            return [IsAuthenticated()]
    
    def get(self,request,**kwargs):
        customer = request.user.user.customer
        rates = Rate.objects.filter(customer=customer, is_approved=True)
        serializer = self.serializer_class(rates,many=True)
        result = []
        for instance in serializer.data:
            reply_objects = Reply.objects.filter(rate_id = instance.get('id')).all()
            if reply_objects:
                rp_all = []
                for rp in reply_objects:
                    rp = {
                        'content':rp.content,
                        'user':{
                            'name':rp.user.name,
                            'time_joined':timezone.now() - rp.user.account.date_joined
                        }
                    }
                    rp_all.append(rp)
                instance['reply'] = rp_all
            result.append(instance)
        return Response(result)
    
    def post(self,request,**kwargs):
        data = request.data
        customer = request.user.user.customer
        data['customer'] = customer.id
        serializer = CreateRateSerializer(data=data,context={'customer':customer,'product':data['product']})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
@swagger_auto_schema()      
class RatingViewReplyDetail(generics.GenericAPIView):
    serializer_class = RateSerializer

    def get_permissions(self):
        print("alo")
        if self.request.method != "GET":
            return [IsAuthenticated()]
    
    def get(self,request,id,**kwargs):
        rate = Rate.objects.filter(product_id=id, is_approved=True)
        serializer = self.serializer_class(rate,many=True)
        result = []
        for instance in serializer.data:
            reply_objects = Reply.objects.filter(rate_id = instance.get('id')).all()
            if reply_objects:
                rp_all = []
                for rp in reply_objects:
                    rp = {
                        'content':rp.content,
                        'user':{
                            'name':rp.user.name
                        }
                    }
                    rp_all.append(rp)
                instance['reply'] = rp_all
            result.append(instance)
        return Response(result)
    
    def post(self,request,id,**kwargs):
        data = request.data
        customer = request.user.user.customer
        data['customer'] = customer.id
        serializer = CreateRateSerializer(data=data,context={'customer':customer,'product':id})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    
@swagger_auto_schema()
class ReplyViews(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ReplySerializer
    
    def post(self,request,id,**kwargs):
        rate = Rate.objects.filter(id=id, is_approved=True)
        if not rate:
            raise serializers.ValidationError({"detail":"Not found this rate"},status=status.HTTP_400_BAD_REQUEST)
        user = request.user.user
        data = request.data
        data['user'] = user.id
        data['rate'] = rate[0].id
        serializer = self.serializer_class(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
@swagger_auto_schema()
class RatingProductViewAll(generics.GenericAPIView):
    serializer_class = RateSerializer

    def get_permissions(self):
        if self.request.method != "GET":
            return [IsAuthenticated()]

    def get(self,request,**kwargs):
        user = request.user
        if user.is_customer:
            customer = request.user.user.customer
            rates = Rate.objects.filter(customer=customer, is_approved=True)
        elif user.is_agency:
            agency = request.user.user.agency
            products = Product.objects.filter(agency = agency)
            rates = Rate.objects.filter(product__in = products, is_approved=True)
        serializer = self.serializer_class(rates,many=True)
        result = []
        for instance in serializer.data:
            reply_objects = Reply.objects.filter(rate_id = instance.get('id')).all()
            if reply_objects:
                rp_all = []
                for rp in reply_objects:
                    rp = {
                        'content':rp.content,
                        'user':{
                            'name':rp.user.name,
                            'time_joined':timezone.now() - rp.user.account.date_joined
                        }
                    }
                    rp_all.append(rp)
                instance['reply'] = rp_all
            result.append(instance)
        return Response(result)