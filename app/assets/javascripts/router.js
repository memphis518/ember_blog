App.Router.map(function(match){
  this.resource('posts');
  this.resource('post', {path: '/post/:post_id'});
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find()
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return App.Post.find(params.post_id)
  }
});

