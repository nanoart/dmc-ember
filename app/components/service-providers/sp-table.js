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
      draggable: true
    }, {
      label: 'Description',
      valuePath: 'description',
      width: '150px'
    }, {
      label: 'Typee',
      valuePath: 'type',
      width: '150px'
    }, {
      label: 'SSO Server',
      valuePath: 'ssoserver'
    }];
  })
});