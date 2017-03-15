import Ember from 'ember';

export default Ember.Route.extend({

  model(sp_id) {
      //unfortunately, firebase id can't be used here, at this stage we may need to conside the local storage
      return this.store.queryRecord('service-provider',{name:sp_id});
    //return this.store.findRecord('service-provider',sp_id);
  },
  actions:{
      saveSP(newSP)
      {

      }
  }

});