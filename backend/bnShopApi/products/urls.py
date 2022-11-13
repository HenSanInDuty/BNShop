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
    path('report/',product_views.Report.as_view(),name='report'),
    path('rate-return/',product_views.RateReturn.as_view(),name='rate-return'),
    path('satisfaction-level/',product_views.SatisfactionLevel.as_view(),name='satisfaction-level'),
    path('type/',product_views.TypeProductViewAll.as_view(),name='type-product'),
    path('',product_views.ProductViewAll.as_view(),name='product'),
]
