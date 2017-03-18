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
      label: 'Typee',
      valuePath: 'type',
      resizable: true,
      width: '150px'
    }, {
      label: 'SSO Server',
      resizable: true,
      valuePath: 'ssoserver'
    }];
  }),

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