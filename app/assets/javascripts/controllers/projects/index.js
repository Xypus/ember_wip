Ninja.ProjectsIndexController = Ember.ObjectController.extend({

  actions: {

    back: function() {
      this.get('model').rollback();
      this.transitionToRoute('company');
    }
  }
});