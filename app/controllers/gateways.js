import Ember from 'ember';

export default Ember.Controller.extend({
    scenarios: ['---', 'Email', 'SMS', 'Telephone', 'HTTP','Twitter'],
    expanded: false,
    noInternet:false,
    actions: {
        removeItem(){

        },
        addItem(){

        },
        toggleSourceCodeFull() {
        this.toggleProperty('expanded');
        },        
        submitLicense(){
            this.toggleProperty('noInternet');
        }
    }    
});
