from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class AddressProfile(models.Model):
    user =  models.ForeignKey(User, related_name='address', on_delete=models.CASCADE)
    dc_tinh = models.CharField(max_length=40)
    dc_quan = models.CharField(max_length=40)
    dc_phuong = models.CharField(max_length=40)
    dc_chitiet = models.TextField(null=True)
    
