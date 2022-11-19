from django.db import models
from products.models import Product
from accounts.models import Customer
from address.models import Address
# Create your models here.
STATUS = [
    ("1",'Waiting for confirm'),
    ("2",'Agency confirmed'),
    ("3",'Delivering'),
    ("4",'Cancel'),
    ("5",'Received')
]

class Payment(models.Model):
    name = models.CharField(max_length=100) 
    
class OrderDetail(models.Model):
    total = models.FloatField(blank=True,null=True)
    date_order = models.DateTimeField(auto_now_add=True)
    date_receive = models.DateTimeField(blank=True,null=True)
    status = models.CharField(max_length=100,choices=STATUS)
    address = models.OneToOneField(Address,on_delete=models.CASCADE,related_name='order_detail',blank=True,null=True)
    payment = models.ForeignKey(Payment,on_delete=models.CASCADE,related_name='order_detail',blank=True,null=True)

class Order(models.Model):
    qty = models.IntegerField(default=1)
    amount = models.FloatField(default=1)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='order')
    order_detail = models.ForeignKey(OrderDetail,on_delete=models.CASCADE, related_name='order', null=True)
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='order')
    
class Cancel(models.Model):
    reason = models.CharField(max_length=100)
    detail = models.TextField()
    

   