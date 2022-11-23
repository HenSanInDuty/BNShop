from django.urls import path
from . import views
urlpatterns = [
    path('account/',views.AccountManageViewAll.as_view(),name='manage-account'),
    path('account/active/<int:idUser>/',views.activeUsers,name="active-user"),
    path('account/deactive/<int:idUser>/',views.deactiveUsers,name="deactive-user"),
]
