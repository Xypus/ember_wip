Ninja.CompanyProjectNewController = Ember.Controller.extend({

  actions: {

    createProject: function() {

      var self = this;

      var project = this.store.createRecord('project', {
        name: this.get('name'),
        description: this.get('description')
      });

      project.save().then(function() {
        self.set('name', '');
        self.set('description', '');
        self.transitionToRoute('company', company);
      });
    }
  }
});