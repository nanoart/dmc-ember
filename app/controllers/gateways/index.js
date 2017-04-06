import Ember from 'ember';

export default Ember.Controller.extend({
    expanded: false,
    actions:{
        addGateway()
        {
            this.transitionToRoute('gateways.new');            
        },
        toggleSourceCodeFull() {
            this.toggleProperty('expanded');
        }        
    }
});
