from django.urls import path,include
from . import views as productViews
urlpatterns = [
    path('',productViews.ProductViewsAll.as_view(),name='product'),
    path('type/',productViews.ProductTypeViews.as_view(),name='product-type')
]
