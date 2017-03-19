import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('service-provider',params.sp_id);  //because the parameter template on URL is sp_id
  },
  actions:{
      editSP(modifiedSP)
      {
          modifiedSP.save().then(() => this.transitionTo('service-providers'));
      }
  }

});