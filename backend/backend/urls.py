from django.conf.urls import url, include
from django.contrib import admin

from rest_framework import routers

import posts.views
import accounts.views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^posts/$', posts.views.PostListView.as_view()),
    url(r'^posts/(?P<pk>\d+)/$', posts.views.PostView.as_view()),
     url(r'^users/$', accounts.views.UserListView.as_view()),
    url(r'^users/(?P<slug>[A-Za-z0-9]+)/$', accounts.views.UserView.as_view())
]