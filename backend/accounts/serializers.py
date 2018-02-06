from rest_framework import serializers

from .models import User

from posts.serializers import PostSerializer

class UserSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)
    
    class Meta:
        model = User
        fields = ('username', 'posts')
        lookup_field = 'username'