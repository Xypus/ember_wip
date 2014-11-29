Ninja.UsersNewController = Ember.Controller.extend({

  actions: {

    signUp: function() {

      var self = this;

      var user = this.store.createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        password: this.get('password')

      });

      user.save().then(function() {
        self.set('firstName', '');
        self.set('lastName', '');
        self.set('email', '');
        self.set('password', '');
        self.transitionToRoute('companies');
      });
    }
  }
});