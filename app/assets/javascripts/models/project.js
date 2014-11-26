Ninja.Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  company: DS.belongsTo('company')
});