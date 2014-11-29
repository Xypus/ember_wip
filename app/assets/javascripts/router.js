Ninja.Router.map(function() {
  this.resource('companies', { path: '/' }, function() {
    this.route('new');
    this.resource('company', { path: '/companies/:company_id' }, function() {
      this.route('edit');
      this.resource('projects', { path: '/projects' }, function() {
        this.route('new');
        this.resource('project', { path: '/:project_id' }, function() {
          this.route('edit');
        });
      });
    });
  });

  this.resource('users', { path: '/users' }, function() {
    this.route('new');
  });
});
