from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=20,null=False)
    #Signals when user create then userprofile create too
    @receiver(post_save, sender=User)
    def createProfileWhenUserCreated(sender,instance,created,**kwargs):
        if created:
            UserProfile.objects.create(user=instance)
        instance.profile.save()
    