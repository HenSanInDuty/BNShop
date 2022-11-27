"""bnShopApi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include,re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
    openapi.Info(
        title="BNShop API",
        default_version='vl',
        description="APIs for BNShop",
        contact=openapi.Contact(email="heninduty@gmail.com"),
        license=openapi.License(name="From Hen & Pội")
    ),
    public=True,
    permission_classes=(permissions.AllowAny,)
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/',include('accounts.urls')),
    path('api/address/',include('address.urls')),
    path('api/products/',include('products.urls')),
    path('api/orders/',include('orders.urls')),
    path('api/rating/',include('rating.urls')),
    path('api/voucher/',include('voucher.urls')),
    path('api/shipping/',include('shipping.urls')),
    path('api/admin/',include('manageadmin.urls')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0),
            name='schema-json'),
    re_path(r'^swagger/$',
            schema_view.with_ui('swagger',cache_timeout=0),
            name='schema-swagger-ui'),
    re_path(r'^redoc/$',
            schema_view.with_ui('redoc',cache_timeout=0),
            name='schema-redoc')
]
