App.Router.reopen({
  location: "history"
});

App.Router.map(function(match){
  this.resource('posts', function(){
    this.route('new')
  });
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

App.PostsNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', {});
  }
});


