EmberBlog.Router.map(function(match){
  this.resource('posts');
  this.resource('post', {path: '/post/:post_id'});
});

EmberBlog.PostsRoute = Ember.Route.extend({
  model: function() {
    return EmberBlog.Post.find()
  }
});

EmberBlog.PostRoute = Ember.Route.extend({
  model: function(params) {
    return EmberBlog.Post.find(params.post_id)
  }
});