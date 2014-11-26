Ninja.CompanyEditRoute = Ember.Route.extend({

  activate: function() {
    this.controllerFor('company').set('isEditing', true);
  },
  deactivate: function() {
    this.controllerFor('company').set('isEditing', false);
  }

});
