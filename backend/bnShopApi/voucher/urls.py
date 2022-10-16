from django.urls import path
from . import views as voucher_views
urlpatterns = [
    path('',voucher_views.VoucherViewAll.as_view(),name = 'voucher'),
    #If you want to init type of voucher, please remove comment below
    #path('init/type/',voucher_views.init_voucher_type,name = 'voucher-type-init')
]
