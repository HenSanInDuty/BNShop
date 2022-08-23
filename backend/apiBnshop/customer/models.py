from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class CustomerProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name='cus_profile')
    kh_ho = models.CharField(max_length=60)
    kh_ten = models.CharField(max_length=60)
    kh_avatar = models.CharField(blank=True,null=True,default='https://icon-icons.com/icon/avatar-people-person-black-hair-man-male-boy/120513',max_length=100)
    kh_email = models.EmailField(null=True)
    kh_sdt = models.CharField(max_length=11)
    kh_ngay_sinh = models.DateField()
    kh_gioi_tinh = models.IntegerField()
    
    def __str__(self):
        return self.kh_ten
    
    