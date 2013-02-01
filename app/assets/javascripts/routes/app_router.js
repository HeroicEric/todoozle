App.Router.map(function() {
  this.resource('tasks');
});

App.TasksRoute = Ember.Route.extend({
  model: function() {
    return App.Task.find();
  }
});
