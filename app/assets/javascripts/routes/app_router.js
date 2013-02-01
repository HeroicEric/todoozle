App.Router.map(function() {
  this.resource('tasks', function() {
    this.resource('task', { path: ':task_id' });
  });
});

App.TasksIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Task.find();
  }
});
