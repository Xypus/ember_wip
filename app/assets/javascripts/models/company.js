Ninja.Company = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  projects: DS.hasMany('project', { async: true}),
  user: DS.belongsTo('user')
});