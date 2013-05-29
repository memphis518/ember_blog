App.Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  createdAtMoment: function(){
    return moment(this.get('createdAt'))
  }.property('createdAt'),
  viewCount: DS.attr('number'),
  commentCount: DS.attr('number'),
  totalActivity: function(){
    return this.get('viewCount') + this.get('commentCount');
  }.property('viewCount', 'commentCount')
});