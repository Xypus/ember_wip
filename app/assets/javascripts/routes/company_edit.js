Ninja.CompanyEditRoute = Ember.Route.extend({

  activate: function() { 
    this.controllerFor('company').set('isEditing', true) 
  },
  deactivate: function() {
    this.controllerFor('company').set('isEditing', false)
  }

  delete: function() {
    var self = this
    this.get('model').destroyRecord().then(function() {
      self.transitionToRoute('companies');
    })
  }
})
