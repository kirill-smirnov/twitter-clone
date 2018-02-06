from .models import Post

from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'text', 'username')

    username = serializers.SerializerMethodField()

    def get_username(self, obj):
        return obj.user.username