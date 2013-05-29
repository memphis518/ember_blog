App.NewPostView = Ember.View.extend({
  templateName: 'new_post',
  tagName: 'form',
  submit: function(){
    this.get('controller').send('addPost', this.get('newPostBody'));
    this.set('newPostBody', '');
    return false;
  }

});