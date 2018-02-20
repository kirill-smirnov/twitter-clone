from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import User
from .serializers import UserSerializer

class UserListView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )

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
    def get(self, request, format=None):
        return Response({
            'user': str(request.user),
            'auth': str(request.auth),
        })
