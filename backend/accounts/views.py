from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import User
from .serializers import UserSerializer

class UserListView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, ) # Allows to sign up everybody

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()

class UserView(RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'
    serializer_class = UserSerializer
    
    def get_queryset(self):
        return User.objects.all()
    
    def get_object(self):
        username = self.kwargs.get('slug')
        return User.objects.get(username=username)


class ExampleView(APIView):
    def post(self, request, **credentials):
        from django.contrib.auth import authenticate
        print(authenticate(request=request, **credentials))
        return authenticate(request=request, **credentials)

