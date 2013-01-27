App.TasksRoute = Ember.Route.extend({
  model: function() {
    return App.Task.find();
  }
});
