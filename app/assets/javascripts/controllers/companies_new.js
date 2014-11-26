Ninja.CompaniesNewController = Ember.Controller.extend({

  actions: {

    showMessage: function() {
      alert('Message');
      console.log('Message');
    },

    createCompany: function() {

      var self = this;

      var company = this.store.createRecord('company', {
        name: this.get('name'),
        description: this.get('description')
      });

      company.save().then(function() {
        consoleLog('Company created!');
        self.set('name', '');
        self.set('description', '');
        self.transitionToRoute('company', company)
      });
    }
  }
});