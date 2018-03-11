from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status

from .models import Post
from accounts.models import User
from .serializers import PostSerializer

class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer): #TODO: Make security
        if self.request.data.get("username", None):
            username = self.request.data.get("username")
            user = User.objects.get(username=username)
        
        elif self.request.data.get("user", None):
            id = self.request.data.get("user", None)
            user = User.objects.get(pk=int(id))
        
        else:
            user = self.request.user
        serializer.save(user=user)


class PostView(RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'
    serializer_class = PostSerializer
    
    def get_queryset(self):
        
        return Post.objects.all()

    def get_perform(self, serializer):
        serializer.save(user=self.request.user)
    
    def get_object(self):
        pk = self.kwargs.get('pk')
        return Post.objects.get(pk=pk)
