import Ember from 'ember';

export default Ember.Controller.extend({
    scenarios: ['---', 'Email', 'SMS', 'Telephone', 'HTTP','Twitter'],
    expanded: false,
    noInternet:false,
    actions: {
        removeItem(){

        },
        addItem(gm, cm){    //cm = configuration model, it can be on of email, sms, telephone etc
            gm.save().then(() => cm.save());

        },
        addGateway()
        {
            this.transitionToRoute('gateways.new');
            
        },
        toggleSourceCodeFull() {
            this.toggleProperty('expanded');
        },        
        submitLicense(){
            this.toggleProperty('noInternet');
        }
    }    
});
