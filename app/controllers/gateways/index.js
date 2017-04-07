import Ember from 'ember';
import Table from 'ember-light-table';

export default Ember.Controller.extend({

    columns: Ember.computed(function() {
        return [{
            label: 'Name',
            valuePath: 'name',
            width: '20%',
            sortable: false
        }, {
            label: 'Domains',
            valuePath: 'domains',
            width: '50%'
         }, {
            label: 'Type',
            valuePath: 'type',
            width: '20%'
        }, {        
            label: 'Enabled',
            valuePath: 'enabled',
            width: '10%'
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
            let rows = this.get('table.selectedRows');
            this.transitionToRoute('/gateways/' + rows[0].content.id + '/edit');
        },
        deleteGateway()
        {
          let rows = this.get('table.selectedRows');
          rows.forEach(function(row) {
                this.store.findRecord('gateway', row.content.id).then(gw => {
                    gw.destroyRecord();
                });

          }, this);
         
        },                
        toggleSourceCodeFull() {
            this.toggleProperty('expanded');
        }        
    }
});
