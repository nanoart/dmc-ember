import Ember from 'ember';

export default Ember.Route.extend({

  model(sp_id) {
    return this.store.findRecord('service-provider',sp_id);
  },
  actions:{
      saveSP(newSP)
      {
          
      }
  }

});