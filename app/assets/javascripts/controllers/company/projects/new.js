Ninja.ProjectsNewController = Ember.Controller.extend({

  needs: "company",

  actions: {

    createProject: function() {

      var self = this;

      var company = this.get('controllers.company').get('model');

      var project = this.store.createRecord('project', {
        name: this.get('name'),
        description: this.get('description')
      });

      project.set('company', company);

      project.save().then(function() {
        self.set('name', '');
        self.set('description', '');
        self.transitionToRoute('company', company);
      });
    }
  }
});