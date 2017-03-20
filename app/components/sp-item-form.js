import Ember from 'ember';
import Table from 'ember-light-table';
import {task} from 'ember-concurrency';

const { computed } = Ember;

export default Ember.Component.extend({
    store: Ember.inject.service(),
    attrsTableModel: [],
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
    table: computed('columns','attrsTableModel', function() {
        return new Table(this.get('columns'), this.get('attrsTableModel'),{enableSync: true});
    }),
    attrComposer: {},
    buttonLabel: 'Save',
    didReceiveAttrs() {
        this._super(...arguments);

        this.get('attrsTableModel').clear();
        let records = this.item.get('assertionAttributes');
        this.get('attrsTableModel').pushObjects(records.toArray());
    },

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

    removeAssertionAttributes: task(function*(rows){
        //forEach not work here?
        for(let i = 0; i < rows.length;i++)
        {
            let aaItem = yield this.get('store').findRecord('assertion-attribute', rows[i].content.id);
            this.item.get('assertionAttributes').removeObject(aaItem);
            yield aaItem.destroyRecord();
        }
        yield this.item.save();   //item is SP

        //update attribute table
        this.get('table').removeRows(rows);

    }).drop(),

    actions:{
        buttonClicked(param)
        {
            this.get('saveATTRS').perform(param);
            //bubble up
            this.sendAction('action',param);    //why here is not an actual actionName?
        },
        addAttribute(attrComposer) {
            //
            var assertionAttribute = this.get('store').createRecord('assertion-attribute', {
                name: attrComposer.name,
                mapTo: attrComposer.mapTo,
                mapType: attrComposer.mapType,
                location:attrComposer.location,
                checkRequest:true
            });
            this.item.get('assertionAttributes').addObject(assertionAttribute);
            let self = this;
            assertionAttribute.save().then(function() {

                self.get('attrsTableModel').clear();
                let records = self.item.get('assertionAttributes');
                self.get('attrsTableModel').pushObjects(records.toArray());

            });

//            var clonedObj = Ember.copy(row, true);
//            this.get('table').addRow(clonedObj);
//            this.sendAction('addAttribute', param);
        },
        deleteRows() {
            this.get('removeAssertionAttributes').perform(this.get('table.selectedRows'));

           

/*
            var deletions = this.get('table.selectedRows').map((row) => {
                this.get('store').findRecord('assertion-attribute', row.content.id).then((aaItem) => {
                    this.item.get('assertionAttributes').removeObject(aaItem);
                    return aaItem.destroyRecord();                
                });

            });

            Ember.RSVP.all(deletions).then(() => {
                this.item.save(); //why this is called before deletions is formed? I guess two layers embedded
            });

*/            
        }

    }
});
