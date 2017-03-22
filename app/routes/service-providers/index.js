import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.A([]);
//    return this.store.findAll('service-provider');
  },
  actions: {
    addSP() {
        this.transitionTo('service-providers.new');
    },
    editSP(id) {
      this.transitionTo('/service-providers/' + id + '/edit');
    },
    deleteSP(id) {
      this.store.findRecord('service-provider', id).then((sp) => {
//          this.store.deleteRecord(sp);
//emberfire way on firebase
        var deletions = sp.get('assertionAttributes').map(function(assertAttr) {
          return assertAttr.destroyRecord();
        });

        // Ensures all attributes are deleted before the sp
        Ember.RSVP.all(deletions)
          .then(function() {
          return sp.destroyRecord();
        })
        .catch(function(e) {
          // Handle errors
        });
      });
       
    }
  }

});
