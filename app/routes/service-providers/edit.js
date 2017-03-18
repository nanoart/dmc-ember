import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
      //unfortunately, firebase id can't be used here, at this stage we may need to conside the local storage
      console.log(params.sp_id);
      return this.store.findRecord('service-provider',params.sp_id);
    //return this.store.findRecord('service-provider',sp_id);
  },
  actions:{
      saveSP(newSP)
      {

      }
  }

});