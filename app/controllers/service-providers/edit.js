import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
        saveEdit(modifiedSP)
        {
          modifiedSP.save().then(() => this.transitionToRoute('service-providers'));
       
        },
        cancelEdit(){
          this.transitionToRoute('service-providers');
        }
  }

});

