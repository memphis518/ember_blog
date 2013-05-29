// Not needed - generated automatically
//App.PostsController = Ember.ArrayController.extend({});

// Now it's needed because we need to extend
App.PostsController = Ember.ArrayController.extend({
  addPost: function(postBody){
    App.Post.createRecord({body: postBody, viewCount: ''});
    return this.get('store').commit();
  }
});

// Not needed - generated automatically
//App.PostController = Ember.ObjectController.extend({});

// Now it's needed because we need to extend the base functionality
App.PostController = Ember.ObjectController.extend({
  createdAtDisplay: function(){
    return this.get('createdAtMoment').format('MMM D, YYYY');
  }.property('createdAtMoment')
});

