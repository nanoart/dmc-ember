import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('service-provider');
  },

  actions: {

    saveServiceProvider(newSP) {
      newSP.save().then(() => this.transitionTo('service-providers'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
