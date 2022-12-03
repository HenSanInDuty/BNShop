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
        user.is_active = False
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
    
    def create_shipperuser(self,phone,password):
        
        user = self.create_user(
            phone,
            password=password
        )
        
        user.is_shipper = True
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
    is_shipper = models.BooleanField(default=False)
    
    objects = AccountManager()
    
    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.phone
    
    def has_perm(self,perm,obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True

class Users(models.Model):
    account = models.OneToOneField(Account,on_delete=models.CASCADE,related_name='user')
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True,null=True,blank=True)
    avatar = models.CharField(max_length=3000,blank=True,default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s")
    nationality = models.CharField(max_length=100,null=True,blank=True)
    gender = models.CharField(max_length=1,blank=True,default='M')
    def __str__(self):
        return self.name
    
class Agency(models.Model):
    user = models.OneToOneField(Users,on_delete=models.CASCADE,related_name='agency')
    main_industry = models.CharField(max_length=100)
    identify = models.CharField(max_length=12)
    def __str__(self):
        return self.user.name
    
class Customer(models.Model):
    user = models.OneToOneField(Users,on_delete=models.CASCADE,related_name='customer')
    follow = models.ManyToManyField(Agency,blank=True,related_name='followed')
    visit = models.ManyToManyField(Agency,blank=True,through='Visit',related_name='visited')
    nickname = models.CharField(max_length=100,null=True,blank=True)
    birthday = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.user.name

class Shipper(models.Model):
    user = models.OneToOneField(Users,on_delete=models.CASCADE,related_name='shipper')
    companyName = models.CharField(max_length=3000)
    def __str__(self):
        return self.user.name + " "+self.companyName


class Visit(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_visit')
    agency = models.ForeignKey(Agency,on_delete=models.CASCADE,related_name='agency_visited')
    time_visited = models.FloatField(blank=True,default=0)
    number_product = models.IntegerField(blank=True,default=0)
    lasted_visited = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.customer.user.name + " visit " + self.agency.user.name + " " + "{:.2f}".format(self.time_visited/60.0) + " minutes"
    
    class Meta:
        unique_together = [('customer', 'agency')]

