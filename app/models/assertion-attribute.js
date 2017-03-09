import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  mapTo: DS.attr('string'),
  mapType: DS.attr('number'),
  location:DS.attr('string'),
  checkRequest: DS.attr('boolean')
});

