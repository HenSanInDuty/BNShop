from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    display_image = models.CharField(max_length=100)
    is_approved = models.BooleanField(default=False,blank=True)
    is_delete = models.BooleanField(default=False,blank=True)