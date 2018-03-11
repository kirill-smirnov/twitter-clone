from django.db import models 
from django.conf import settings    

class Post(models.Model):
    title = models.CharField(max_length=64)
    text = models.CharField(max_length=140)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="posts", on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return "{}: {}".format(self.user, self.title)
