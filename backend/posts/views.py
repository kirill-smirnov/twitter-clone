from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status

from .models import Post
from accounts.models import User
from .serializers import PostSerializer

class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    # def create(self, request, *args, **kwargs):
    #     if request.data["username"]:
    #         username = request.data.pop("username")
    #         user = User.objects.get(username=username)
    #         request.data["user"] = user.pk          
        
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, \
    #         status=status.HTTP_201_CREATED, \
    #         headers=headers)

    def perform_create(self, serializer):
        if request.data["username"]:
            username = request.data.pop("username")
            user = User.objects.get(username=username)
        
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
