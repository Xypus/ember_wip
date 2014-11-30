Ninja.ApplicationRoute = Ember.Route.extend({

  actions: {
    validSignIn: function() {
      this.transitionToRoute('companies');
    }
  }
});