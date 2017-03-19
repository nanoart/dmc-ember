import Ember from 'ember';
import Table from 'ember-light-table';
import {task} from 'ember-concurrency';

const { computed } = Ember;

export default Ember.Component.extend({
    store: Ember.inject.service(),
    attrName: 'Mingfa',
    //store: Ember.inject.service(), we can access the store in the computed this way
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
        return new Table(this.get('columns'), this.item.get('assertionAttributes'));
    }),
    row: {},
    buttonLabel: 'Save',

    saveATTRS: task(function*(newSP){
        var store = this.get('store');
        var rows = this.get('table').rows;
        for(let i=0; i < rows.length; i++)
        {
            var assertionAttribute = store.createRecord('assertion-attribute', {
                name: rows[i].get('name'),
                mapTo: rows[i].get('mapTo'),
                mapType: rows[i].get('mapType'),
                location:rows[i].get('location'),
                checkRequest:true
            });
            yield assertionAttribute.save();
            var attrs = yield newSP.get('assertionAttributes');
            attrs.pushObject(assertionAttribute);
        }

    }).drop(),


    actions:{
        buttonClicked(param)
        {
            this.get('saveATTRS').perform(param);
            //bubble up
            this.sendAction('action',param);    //why here is not an actual actionName?
        },
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
