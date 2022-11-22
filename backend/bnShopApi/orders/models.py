from django.db import models
from products.models import Product
from accounts.models import Agency, Customer, Shipper
from address.models import Address
# Create your models here.
STATUS = [
    ("1",'Waiting for confirm'),
    ("2",'Agency confirmed'),
    ("3",'Delivering'),
    ("4",'Cancel'),
    ("5",'Received')
]

SUB_STATUS_CHOICES = (
    ('0','Delivery success'),
    ('1','Delivery unsuccess'),
    ('2','Customer cancel')
)

class Payment(models.Model):
    name = models.CharField(max_length=100) 
    
class OrderDetail(models.Model):
    total = models.FloatField(blank=True,null=True)
    date_order = models.DateTimeField(auto_now_add=True)
    date_receive = models.DateTimeField(blank=True,null=True)
    status = models.CharField(max_length=100,choices=STATUS)
    address = models.ForeignKey(Address,on_delete=models.CASCADE,related_name='order_detail',blank=True,null=True)
    payment = models.ForeignKey(Payment,on_delete=models.CASCADE,related_name='order_detail',blank=True,null=True)
    shipper = models.ForeignKey(Shipper,on_delete=models.CASCADE,related_name='order_detail',blank=True,null=True)
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='order_detail')
    agency = models.ForeignKey(Agency,on_delete=models.CASCADE,related_name='order_detail',null=True)

class StatusShippingNote(models.Model):
    order_detail = models.ForeignKey(OrderDetail,on_delete=models.CASCADE,related_name='status_shipping')
    shipper = models.ForeignKey(Shipper,on_delete=models.CASCADE,related_name='status_shipping')
    substatus = models.IntegerField(choices=SUB_STATUS_CHOICES)
    note = models.TextField()
    date_note = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    qty = models.IntegerField(default=1)
    amount = models.FloatField(default=1)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='order')
    order_detail = models.ForeignKey(OrderDetail,on_delete=models.CASCADE, related_name='order', null=True)
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='order')
    
class Cancel(models.Model):
    reason = models.CharField(max_length=100)
    detail = models.TextField()
    

   