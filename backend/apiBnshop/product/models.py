from pyexpat import model
from wsgiref.handlers import format_date_time
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='product')
    sp_ten = models.CharField(max_length=1000)
    sp_moTaSanPham = models.TextField()
    sp_soLuong = models.BigIntegerField(default=0,blank=True)
    
class ProductDetail(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='detail')
    ctsp_tieuDe = models.CharField(max_length=100)
    ctsp_noiDung = models.TextField()
    
class ProductPrice(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='price')
    g_tuNgay = models.DateField()
    g_gia = models.FloatField()
    
class ProductType(models.Model):
    loai_ten = models.CharField(max_length=100)
    
class ProductOfType(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='typeof')
    type = models.ForeignKey(ProductType,on_delete=models.CASCADE,related_name='productof')