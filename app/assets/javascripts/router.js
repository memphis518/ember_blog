EmberBlog.Router.map(function(match){
  this.route('posts', {path: "/" });
});

EmberBlog.PostsRoute = Ember.Route.extend({
  model: function() {
    return EmberBlog.Post.find()
  }
});