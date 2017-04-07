import Ember from 'ember';
import Table from 'ember-light-table';

export default Ember.Controller.extend({

    columns: Ember.computed(function() {
        return [{
            label: 'Name',
            valuePath: 'name',
            width: '30%',
            sortable: false
        }, {
            label: 'Domains',
            valuePath: 'domains',
            width: '30%'
         }, {
            label: 'Type',
            valuePath: 'type',
            width: '30%'
        }, {        
            label: 'Enabled',
            valuePath: 'enabled',
            width: '30%'
        }];
    }),
    table: Ember.computed('columns', function() {
        return new Table(this.get('columns'), this.model,{enableSync: true});
    }),      

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
