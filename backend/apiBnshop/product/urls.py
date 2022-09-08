from django.urls import path,include
from . import views as productViews
urlpatterns = [
    path('',productViews.ProductViewsAll.as_view(),name='product'),
    path('<int:id>/',productViews.ProductViewsDetail.as_view(),name="product-detail"),
    path('price/<int:id>/',productViews.updatePrice,name="prodcut-price"),
    path('detail/<int:id>/',productViews.ProductDetailViews.as_view(),name="prodcut-detail"),
    path('type/',productViews.ProductTypeViews.as_view(),name='product-type')
]
