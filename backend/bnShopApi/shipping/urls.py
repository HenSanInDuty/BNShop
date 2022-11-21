from django.urls import path
from . import views
urlpatterns = [
    path('order-detail/list-shipping/',views.ListOrderDetailShipping.as_view(),name="list-shipping"),
    path('order-detail/status/',views.ShippingStatus.as_view(),name="status-shipping")
]
