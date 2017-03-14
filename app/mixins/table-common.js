import Ember from 'ember';
import Table from 'ember-light-table';
import { task } from 'ember-concurrency';

const {
  inject,
  isEmpty,
  computed
} = Ember;

export default Ember.Mixin.create({
  store: inject.service(),

  limitToLast: 4,
  orderBy: 'name',

  isLoading: computed.oneWay('fetchRecords.isRunning'),
  canLoadMore: true,
  enableSync: true,

  model: null,
  meta: null,
  columns: null,
  table: null,

  init() {
    this._super(...arguments);

    let table = new Table(this.get('columns'), this.get('model'), { enableSync: this.get('enableSync') });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('name'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    this.set('table', table);
  },

  fetchRecords: task(function*() {
    let records = yield this.get('store').query('service-provider', this.getProperties(['limitToLast', 'orderBy']));
    this.get('model').pushObjects(records.toArray());
    this.set('canLoadMore', false);
//    this.set('canLoadMore', !isEmpty(records));
  }).restartable(),

  actions: {
    onScrolledToBottom() {
      if (this.get('canLoadMore')) {
//        this.incrementProperty('page');
        this.get('fetchRecords').perform();
      }
    }      
  }
});