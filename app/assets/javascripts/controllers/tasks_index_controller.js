App.TasksIndexController = Ember.ArrayController.extend({
  save: function() {
    this.store.commit();
  }
});
