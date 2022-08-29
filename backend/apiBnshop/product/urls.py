from django.urls import path,include
from . import views as productViews
urlpatterns = [
    path('type/',productViews.ProductTypeViews.as_view(),name='product-type')
]
