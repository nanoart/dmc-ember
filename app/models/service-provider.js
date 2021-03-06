import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  type: DS.attr('string'),
  ssoserver: DS.attr('string'),
  assertionAttributes: DS.hasMany('assertion-attribute', { async: true, dependent: 'destroy' })
});
