from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class Product(models.Model):
    #Agency
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
    g_tuNgay = models.DateField(blank=True,default=timezone.now().date())
    g_gia = models.FloatField()
    
class ProductImage(models.Model):   
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='image')
    hinh_url = models.CharField(max_length=1000)
    
class ProductType(models.Model):
    loai_ten = models.CharField(max_length=100)
    
class ProductOfType(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='typeof')
    type = models.ForeignKey(ProductType,on_delete=models.CASCADE,related_name='productof')