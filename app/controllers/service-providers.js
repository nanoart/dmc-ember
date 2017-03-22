import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addSP() {
      this.transitionToRoute('service-providers.new');
    },
    editSP() {
      
    },
    deleteSP() {
      
    }
  }

});

