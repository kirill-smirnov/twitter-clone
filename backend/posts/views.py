from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView

from .models import Post
from .serializers import PostSerializer

class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

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
