import Ember from 'ember';
import Table from 'ember-light-table';

const { computed } = Ember;

export default Ember.Component.extend({
    attrName: 'Mingfa',
    //this is for attribute list
    columns: computed(function() {
        return [{
        label: 'Name',
        valuePath: 'name',
        width: '60px',
        sortable: false
        }, {
        label: 'Map To',
        valuePath: 'mapTo',
        width: '150px'
        }, {
        label: 'Location',
        valuePath: 'location',
        width: '150px'
        }];
    }),
    table: computed('columns', function() {
        return new Table(this.get('columns'));
    }),
    row: {},


    actions:{
        addAttribute(row) {
            var clonedObj = Ember.copy(row, true);
            this.get('table').addRow(clonedObj);
//            this.sendAction('addAttribute', param);
        },
        deleteRows() {
            this.get('table').removeRows(this.get('table.selectedRows'));
        }        
    }
});
