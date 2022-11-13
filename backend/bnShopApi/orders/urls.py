from django.urls import path
from . import views as order_views
urlpatterns = [
    path('',order_views.OrderViewAll.as_view(),name="order"),
    path('<int:id>/',order_views.OrderViewDetail.as_view(),name="order-detail"),
    path('order-detail/',order_views.OrderDetailViewAll.as_view(),name="orderdetail"),
    path('order-detail/<int:id>/',order_views.OrderDetailViewDetail.as_view(),name="orderdetail-detail"),
]
