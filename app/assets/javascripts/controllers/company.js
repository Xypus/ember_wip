Ninja.CompanyController = Ember.ObjectController.extend({

  isEditing: false,

  actions: {

    delete: function () {
      var self = this;
      this.get('model').destroyRecord().then(function () {
        self.transitionToRoute('companies');
      })
    }
  }
  
})