
Ninja.Router.map(function() {
  this.resource('companies', { path: '/' }, function () {
    this.route('new');
    this.resource('company', { path: '/companies/:id' }, function () {
      this.route('edit')
    });
  })
})
