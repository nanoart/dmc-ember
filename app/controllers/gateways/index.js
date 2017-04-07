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
    isDisabled4Edit: Ember.computed('table.selectedRows',function(){
        return this.get('table.selectedRows').length !== 1;
    }),

    isDisabled4Delete: Ember.computed.empty('table.selectedRows'),          

    expanded: false,
    actions:{
        addGateway()
        {
            this.transitionToRoute('gateways.new');            
        },
        editGateway()
        {
            this.transitionToRoute('gateways.new');            
        },
        deleteGateway()
        {
          let rows = this.get('table.selectedRows');
//          alert(rows[0].content.id);
//we can do the deletion here,as the store is injected. this is simply for learning closure action on component
//          this.get('deleteSP')(rows[0].content.id); //it can have promise
          this.get('table').removeRows(rows);            
        },                
        toggleSourceCodeFull() {
            this.toggleProperty('expanded');
        }        
    }
});
