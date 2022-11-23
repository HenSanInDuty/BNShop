from django.urls import path
from . import views
urlpatterns = [
    path('account/',views.AccountManageViewAll.as_view(),name='manage-account'),
    path('account/active/<int:idUser>/',views.activeUsers,name="active-user"),
    path('account/deactive/<int:idUser>/',views.deactiveUsers,name="deactive-user"),
    path('product/',views.ProductManageViewAll.as_view(),name="manage-product"),
    path('product/active/<int:productId>/',views.activeProduct,name="active-product"),
    path('product/delete/<int:productId>/',views.deleteProduct,name="delete-product"),
    path('product/type/',views.TypeProductManageViewAll.as_view(),name="manage-product-type"),
    path('product/type/<int:typeId>/',views.TypeProductManageViewDetail.as_view(),name="manage-product-type-detail"),
    path('rating/',views.RatingViewAll.as_view(),name="manage-rating"),
    path('rating/active/<int:rateId>/',views.activeProduct,name="active-ratet"),
    path('rating/delete/<int:rateId>/',views.deleteProduct,name="delete-ratet"),

]
