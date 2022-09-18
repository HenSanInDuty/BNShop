from django.db import models

from accounts.models import Customer
from orders.models import OrderDetail

# Create your models here.
class Type(models.Model):
    condition = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    

class Voucher(models.Model):
    customer = models.ManyToManyField(Customer,related_name='voucher',through='VoucherCustomer')
    type = models.ForeignKey(Type,related_name='voucher',on_delete=models.CASCADE)
    order_detail = models.ForeignKey(OrderDetail,related_name='voucher',on_delete=models.CASCADE,blank=True)
    code = models.CharField(max_length=40)
    qty = models.IntegerField()
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100,null=True,blank=True)
    from_price = models.FloatField(null=True,blank=True)
    from_product = models.IntegerField(null=True,blank=True)
    reduce_price = models.FloatField(null=True,blank=True)
    reduce_persent = models.FloatField(null=True,blank=True)
    end_date = models.DateTimeField()
    
    
class VoucherCustomer(models.Model):
    customer = models.ForeignKey(Customer,related_name='customer_voucher',on_delete=models.CASCADE)
    voucher = models.ForeignKey(Voucher,related_name='voucher_customer',on_delete=models.CASCADE)
    is_used = models.BooleanField(default=False)

    

