from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class AgencyProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name='profile')
    dl_name = models.CharField(max_length=60);
    dl_avatar = models.CharField(max_length=100);
    dl_email = models.EmailField();
    dl_sdt = models.CharField(max_length=11);
    dl_cmnd = models.CharField(max_length=11);
    
    def __str__(self):
        return self.dl_name + " " +self.dl_cmnd
    
    