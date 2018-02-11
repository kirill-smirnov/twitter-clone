from django.conf.urls import url, include
from django.contrib import admin

from rest_framework import routers

import posts.views
import accounts.views

from rest_framework.authtoken import views as rest_framework_views


patterns = [
    url(r'^posts/$', posts.views.PostListView.as_view()),
    url(r'^posts/(?P<pk>\d+)/$', posts.views.PostView.as_view()),
    url(r'^users/$', accounts.views.UserListView.as_view()),
    url(r'^users/(?P<slug>[A-Za-z0-9]+)/$', accounts.views.UserView.as_view()),
    url(r'^auth/$', rest_framework_views.obtain_auth_token,
        name='get_auth_token'),
]

urlpatterns = [
    url(r'^api/', include(patterns)),
    url(r'^admin/', admin.site.urls),
    url(r'^auth/$', accounts.views.ExampleView.as_view()),
]
