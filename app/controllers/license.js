import Ember from 'ember';

export default Ember.Controller.extend({
    expanded: false,
    noInternet:false,
    actions: {
        toggleSourceCodeFull() {
        this.toggleProperty('expanded');
        },        
        submitLicense(){
            this.toggleProperty('noInternet');
        }
    }
});
