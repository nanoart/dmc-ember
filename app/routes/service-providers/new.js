import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('service-provider');
  },

  actions: {

    saveServiceProvider(newSP) {
      var newAssertAttr = this.store.createRecord({
        name: 'lastLogin',
        mapTo: 'lastLogin',
        mapType: 1,
        location:'BODY',
        checkRequest:true
      });
      newSP.get('assertionAttributes').then(function(assertionAttributes) {
        assertionAttributes.addOject(newAssertAttr);

        newSP.save().then(() => this.transitionTo('service-providers'));
      });

      
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
