
Ninja.Router.map(function() {
  this.resource('companies', { path: '/' }, function () {
    this.resource('company', { path: '/companies/:id' });
  })
})
