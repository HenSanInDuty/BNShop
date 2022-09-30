from django.urls import path
from . import views as product_views
urlpatterns = [
    path('init-countries/',product_views.init_countries,name="init-countries"),
    path('category/',product_views.CategoryViewAll.as_view(),name='category'),
    path('category/<int:id>/',product_views.CategoryViewDetail.as_view(),name='category'),
    path('test/',product_views.TestSomethingelse.as_view(),name='test'),
    
    path('',product_views.ProductViewAll.as_view(),name='product'),
]
