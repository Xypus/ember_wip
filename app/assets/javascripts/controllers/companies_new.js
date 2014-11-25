Ninja.CompaniesNewController = Ember.Controller.extend({

  actions: {
    createLead: function() {
      var self = this;
      var company = this.store.createRecord('company', this.get('fields'));
      company.save().then(function() {
        self.transitionToRoute('company', company)
      });
    }
  }
});