from django.urls import path
from . import views as product_views
urlpatterns = [
    path('init-countries/',product_views.init_countries,name="init-countries")
]
