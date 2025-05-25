from django.urls import path, include
from django.contrib import admin
from oauth2_provider import urls as oauth2_urls
from .views import TaskViewSet
from rest_framework.routers import DefaultRouter
from .views import OAuthCredentialsView

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/credentials/', OAuthCredentialsView.as_view()),
]