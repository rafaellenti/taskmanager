from django.shortcuts import render
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope
from django.http import JsonResponse
from oauth2_provider.models import Application
from rest_framework.views import APIView

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [TokenHasReadWriteScope]

    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user)   

class OAuthCredentialsView(APIView):
    def get(self, request):
        app = Application.objects.get(name='TaskManager')
        return JsonResponse({'client_id': app.client_id})