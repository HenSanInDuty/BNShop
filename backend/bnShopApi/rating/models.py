from django.db import models
from accounts.models import Customer, Users
from products.models import Product
# Create your models here.
class Rate(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    star = models.IntegerField(default=1)
    date_created = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='rate')
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rate')

class Reply(models.Model):
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    rate = models.ForeignKey(Rate,on_delete=models.CASCADE,blank=True,related_name='reply')
    user = models.ForeignKey(Users,on_delete=models.CASCADE,blank=True,related_name='reply')

class Image(models.Model):
    image_url = models.CharField(max_length=100)
    type = models.IntegerField(blank=True,default=2)
    rate = models.ForeignKey(Rate,on_delete=models.CASCADE,related_name='image',blank=True)