from django.urls import path
from . import views

urlpatterns = [
    path("",views.AddressViewAll.as_view(),name="get-all-address"),
    path("<int:idAddress>/",views.AddressViewDetail.as_view(),name="get-detail-address")
]
