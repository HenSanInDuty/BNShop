from django.urls import path
from . import views as product_views
urlpatterns = [
    path('init-countries/',product_views.init_countries,name="init-countries"),
    path('category/',product_views.CategoryViewAll.as_view(),name='category'),
    path('',product_views.ProductViewAll.as_view(),name='product'),
]
