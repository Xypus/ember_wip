Ninja.CompaniesNewController = Ember.Controller.extend({

  actions: {

    createCompany: function() {

      var self = this;

      var company = this.store.createRecord('company', {
        name: this.get('name'),
        description: this.get('description')
      });

      company.set('user', currentUser);

      company.save().then(function() {
        self.set('name', '');
        self.set('description', '');
        self.transitionToRoute('company', company);
      });
    }
  }
});