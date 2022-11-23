from django.db import models

from accounts.models import Customer
from orders.models import OrderDetail

# Create your models here.
class Type(models.Model):
    CONDITION_TYPE = (
        (0,'Price'),
        (1,'Number')
    )
    
    TYPE_REDUCE = (
        (0,'Reduce Price'),
        (1,'Reduce Percent')
    )
    
    condition = models.IntegerField(default=0,choices = CONDITION_TYPE)
    type = models.IntegerField(default=0,choices = TYPE_REDUCE)

class Voucher(models.Model):
    SCOPE_VOUCHER = (
        (0,'All'),
        (1,'Special')
    )
    
    customer = models.ManyToManyField(Customer,related_name='voucher',through='VoucherCustomer',blank=True)
    type = models.ForeignKey(Type,related_name='voucher',on_delete=models.CASCADE)
    code = models.CharField(max_length=40,unique=True)
    qty = models.IntegerField(null=True,blank=True)
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100,null=True,blank=True)
    subcontent = models.CharField(max_length=100,null=True,blank=True)
    from_price = models.FloatField(null=True,blank=True)
    from_product = models.IntegerField(null=True,blank=True)
    reduce_price = models.FloatField(null=True,blank=True)
    reduce_persent = models.FloatField(null=True,blank=True)
    end_date = models.DateTimeField(null=True,blank=True)
    is_delete = models.BooleanField(default=False)
    scope = models.IntegerField(default = 0,choices=SCOPE_VOUCHER)
    
    
class VoucherCustomer(models.Model):
    customer = models.ForeignKey(Customer,related_name='customer_voucher',on_delete=models.CASCADE)
    voucher = models.ForeignKey(Voucher,related_name='voucher_customer',on_delete=models.CASCADE)
    is_used = models.BooleanField(default=False)

    

