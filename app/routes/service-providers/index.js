import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.A([]);
//    return this.store.findAll('service-provider');
  }

});
