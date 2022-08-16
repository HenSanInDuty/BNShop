from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
class AccountProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE, related_name='accountProfile')
    role = models.CharField(max_length=20,null=False)
    #Signals when user created then userprofile created too
    @receiver(post_save, sender=User)
    def createProfileWhenUserCreated(sender,instance,created,**kwargs):
        if created:
            AccountProfile.objects.create(user=instance)
        instance.accountProfile.save()
    