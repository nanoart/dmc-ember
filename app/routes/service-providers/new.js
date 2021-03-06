import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  serviceProviders: storageFor('service-providers'),

  model() {
    return this.store.createRecord('service-provider');
  },

  actions: {

    addAttribute()
    {
      //add an new attribute into memory, does not actally save into database
    },

    saveServiceProvider(newSP) {
      let sps = this.get('serviceProviders');
//      sps.reset();
      sps.addObject(newSP);

      newSP.save();

      this.transitionTo('service-providers'); 
      /*
      newSP.save().then(() => this.transitionTo('service-providers'));
      var assertionAttribute = this.store.createRecord('assertion-attribute', {
        name: 'lastLogin',
        mapTo: 'lastLogin',
        mapType: 1,
        location:'BODY',
        checkRequest:true
      });

      var self = this;
      assertionAttribute.save();
      Ember.RSVP.all([assertionAttribute.save(), newSP.get('assertionAttributes')]).then(function(promises) {
        var attrs = promises[1];
        attrs.pushObject(assertionAttribute);
        newSP.save().then(() => self.transitionTo('service-providers')); 
      });



      Ember.RSVP.Promise.cast(newSP.get('assertionAttributes')).then(function(assertionAttributes) {
        assertionAttributes.pushOject(assertionAttribute);

        newSP.save().then(() => this.transitionTo('service-providers'));
      });

    newSP.get('assertionAttributes').addOject(assertionAttribute);
    assertionAttribute.save().then(function(){
      newSP.save().then(() => this.transitionTo('service-providers'));       
    });
*/
      


    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
