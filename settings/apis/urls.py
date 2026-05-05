# api_urls.py
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import api_views

urlpatterns = [
    path('token/', TokenObtainPairView.as_view()),        # POST → get access+refresh
    path('token/refresh/', TokenRefreshView.as_view()),   # POST → refresh access
    path('register/', api_views.RegisterView.as_view()),
    path('me/', api_views.ProfileView.as_view()),
]