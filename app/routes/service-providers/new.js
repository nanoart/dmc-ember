import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('service-provider');
  },

  actions: {

    saveServiceProvider(newSP) {
      var assertionAttribute = this.store.createRecord('assertion-attribute', {
        name: 'lastLogin',
        mapTo: 'lastLogin',
        mapType: 1,
        location:'BODY',
        checkRequest:true
      });
      /*
      Ember.RSVP.Promise.cast(newSP.get('assertionAttributes')).then(function(assertionAttributes) {
        assertionAttributes.pushOject(assertionAttribute);

        newSP.save().then(() => this.transitionTo('service-providers'));
      });
*/
    newSP.get('assertionAttributes').pushOject(assertionAttribute);

      newSP.save().then(() => this.transitionTo('service-providers'));


    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
