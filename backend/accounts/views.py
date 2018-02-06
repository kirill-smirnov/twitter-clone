from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView

from .models import User
from .serializers import UserSerializer

class UserListView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
