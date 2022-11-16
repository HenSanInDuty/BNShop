from django.db import models
from accounts.models import Agency, Customer
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100)
    agency = models.ForeignKey(
        Agency, on_delete=models.CASCADE, related_name="agency")
    class Meta:
        unique_together = [('name','agency')]
    
    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self) -> str:
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    origin = models.CharField(max_length=100)
    origin_brand = models.CharField(max_length=100)

    def __str__(self) -> str:
        if self.name:
            return self.name + ' from ' + self.origin + ' : ' + self.origin_brand

    class Meta:
        unique_together = [('origin', 'origin_brand','name')]


class Detail(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100)

    def __str__(self):
        return self.title + " " + self.content


class Describe(models.Model):
    content = models.TextField()

class Product(models.Model):
    name = models.CharField(max_length=100)
    display_image = models.CharField(max_length=30000)
    is_approved = models.BooleanField(default=False, blank=True)
    is_delete = models.BooleanField(default=False, blank=True)
    category = models.ManyToManyField(Category, related_name="product",blank=True)
    type = models.ManyToManyField(Type, related_name="product")
    detail = models.ManyToManyField(Detail, related_name="product",blank=True)
    agency = models.ManyToManyField(Agency, related_name="product")
    customer_favorite = models.ManyToManyField(
        Customer, related_name="favorite_product", blank=True)
    customer_bought = models.ManyToManyField(
        Customer, related_name="bought_product", blank=True)
    brand = models.ForeignKey(
        Brand, related_name="product", on_delete=models.CASCADE)
    describe = models.OneToOneField(
        Describe, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Price(models.Model):
    price = models.FloatField()
    from_datetime = models.DateTimeField(auto_now_add=True)
    end_datetime = models.DateTimeField(blank=True, null=True)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='price')

class Quantity(models.Model):
    quantity = models.IntegerField()
    change_num = models.IntegerField(null=True)
    note = models.CharField(max_length=100)
    from_date = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name="history", null=True)
    product = models.ForeignKey(
        Product, related_name="quantity", on_delete=models.CASCADE)
    
    def __str__(self):
        return self.product.name + " " + self.note

class Attachment(models.Model):
    url = models.CharField(max_length=3000)
    type = models.CharField(max_length=100)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='attachment', blank=True)
