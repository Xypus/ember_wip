Ninja.CompanyEditController = Ember.ObjectController.extend({
  
  actions: {

    saveChanges: function() {
      var self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('company');
      })
    },
  
    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('company');
    },

    delete: function() {
      var self = this;
      this.get('model').destroyRecord().then(function() {
        self.transitionToRoute('companies');
      })
    }
  }
});