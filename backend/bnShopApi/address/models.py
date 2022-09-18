from django.db import models
from accounts.models import Users
# Create your models here.
class Address(models.Model):
    user = models.ForeignKey(Users,related_name='address',on_delete=models.CASCADE)
    province = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    ward = models.CharField(max_length=100)
    detail = models.TextField(blank=True,null=True)
    type = models.CharField(max_length=100)
    is_approved = models.BooleanField(blank=True,default=True)
    is_default = models.BooleanField(blank=True,default=False)
    is_delete = models.BooleanField(blank=True,default=False)