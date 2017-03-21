import Ember from 'ember';
import TableCommon from '../../mixins/table-common';

const {
  computed
} = Ember;

export default Ember.Component.extend(TableCommon, {
  columns: computed(function() {
    return [{
      label: 'Name',
      valuePath: 'name',
      width: '60px',
      sortable: false,
      resizable: true,
      draggable: true
    }, {
      label: 'Description',
      valuePath: 'description',
      width: '150px',
      resizable: true,
    }, {
      label: 'Type',
      valuePath: 'type',
      resizable: true,
      width: '150px'
    }, {
      label: 'SSO Server',
      resizable: true,
      valuePath: 'ssoserver'
    }];
  }),

  isDisabled4Edit: Ember.computed('table.selectedRows',function(){
    return this.get('table.selectedRows').length !== 1;
  }),

  isDisabled4Delete: Ember.computed.empty('table.selectedRows'),

  actions: {
        editSP() {
//      go to edit route
          let rows = this.get('table.selectedRows');
          this.get('editSP')(rows[0].content.id);
        },
        deleteSP() {
          let rows = this.get('table.selectedRows');
//          alert(rows[0].content.id);
//we can do the deletion here,as the store is injected. this is simply for learning closure action on component
          this.get('deleteSP')(rows[0].content.id); //it can have promise
          this.get('table').removeRows(this.get('table.selectedRows'));
        }    
  }
});