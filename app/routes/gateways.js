import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('gateway');
    //this is from table.removeRows, but sync doesn't work
//    return this.store.findAll('gateway').then(gateways => gateways.toArray()) ;
  }

});
