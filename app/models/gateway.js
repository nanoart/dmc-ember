import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  domains: DS.attr('string'),
  type: DS.attr('string'),
  enabled:DS.attr('boolean'),
  config:DS.attr('string')  //which actually is a json string
});
