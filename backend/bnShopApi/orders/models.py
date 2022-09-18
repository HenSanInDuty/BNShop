from django.db import models
from products.models import Product
from accounts.models import Customer
from address.models import Address
# Create your models here.

class Payment(models.Model):
    name = models.CharField(max_length=100) 
    
class OrderDetail(models.Model):
    total = models.FloatField()
    date_order = models.DateTimeField(auto_now_add=True)
    date_receive = models.DateTimeField(blank=True,null=True)
    status = models.CharField(max_length=100)
    address = models.OneToOneField(Address,on_delete=models.CASCADE,related_name='order_detail')
    payment = models.ForeignKey(Payment,on_delete=models.CASCADE,related_name='order_detail')

class Order(models.Model):
    qty = models.IntegerField(default=1)
    amount = models.FloatField(default=1)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='order')
    detail = models.ForeignKey(OrderDetail,on_delete=models.CASCADE, related_name='order')
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='order')
    

   