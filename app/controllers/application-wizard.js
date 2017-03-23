import Ember from 'ember';

export default Ember.Controller.extend({

  scenarios: ['---', 'Windows Logon', 'RADIUS', 'Web', '2X'],
  scenario: '---',
  index: 0,
  total: 4,
  percentWidth: Ember.computed('total',function(){
      return 100 - (100 / this.get('total')) + '%';
  }),
  percent: '0%',
  actions: {
    selectScenario(newscenario) { 
    	this.set('scenario', newscenario);
    },
    nextStep(){
        this.incrementProperty('index');
        let current = this.get('index');
        this.set('percent', current / (this.get('total') - 1) * 100+'%');
    }
  }

});
