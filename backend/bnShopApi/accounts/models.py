from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# Create your models here.

class AccountManager(BaseUserManager):
    def create_user(self,phone,password=None):
        if not phone:
            raise ValueError('User must have a phone number')
        
        user = self.model(
            phone = phone
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_agencyuser(self,phone,password):
        
        user = self.create_user(
            phone,
            password=password
        )
        
        user.is_agency = True
        user.save(using=self._db)
        return user
    
    def create_customeruser(self,phone,password):
        
        user = self.create_user(
            phone,
            password=password
        )
        
        user.is_customer = True
        user.save(using=self._db)
        return user
    
    def create_superuser(self,phone,password):
        
        user = self.create_user(
            phone,
            password=password
        )
        
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user
        
class Account(AbstractBaseUser):
    phone = models.CharField(max_length=10, unique=True, null= False)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)
    is_agency = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    objects = AccountManager()
    
    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.phone
    
    def has_perm(self,perm,obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True

