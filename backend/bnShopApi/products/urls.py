from django.urls import path
from . import views as product_views
urlpatterns = [
    path('init-countries/',product_views.init_countries,name="init-countries"),
    path('wish-list/<int:pid>/',product_views.WishList.as_view(),name="wish-list"),
    path('wish-list/',product_views.get_wish_list,name='get-wish-list'),
    path('category/',product_views.CategoryViewAll.as_view(),name='category'),
    path('category/<int:id>/',product_views.CategoryViewDetail.as_view(),name='category'),
    path('agency/<int:agencyid>/',product_views.product_agency,name='product-detail-agency'),
    path('<int:id>/',product_views.ProductViewDetail.as_view(),name='product-detail'),
    path('',product_views.ProductViewAll.as_view(),name='product'),
]
