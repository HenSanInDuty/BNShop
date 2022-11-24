from django.urls import path
from . import views as rating_views
urlpatterns = [
    path('',rating_views.RatingProductViewAll.as_view(),name="rating"),
    path('<int:id>/',rating_views.RatingViewReplyDetail.as_view(),name="rating"),
    path('product-rating/',rating_views.RatingViewReplyDetail.as_view(),name="rating"),
    path('reply/<int:id>/',rating_views.ReplyViews.as_view(),name='reply')
]
