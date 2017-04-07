import Ember from 'ember';

export default Ember.Route.extend({

  model() {
//    return this.store.findAll('gateway');
    //
    return this.store.findAll('gateway').then(gateways => gateways.toArray()) ;
  }

});
