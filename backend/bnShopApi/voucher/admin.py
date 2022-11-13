from django.contrib import admin
from .models import Voucher,VoucherCustomer,Type
# Register your models here.
admin.site.register((Voucher,VoucherCustomer,Type))