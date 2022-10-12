from django.urls import path
from . import views as rating_views
urlpatterns = [
    path('',rating_views.RatingViewAll.as_view(),name="rating")
]
