from .models import Post
from accounts.models import User

from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    user = serializers.CurrentUserDefault()
    class Meta:
        model = Post
        fields = ('title', 'text', 'user')