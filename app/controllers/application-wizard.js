import Ember from 'ember';

export default Ember.Controller.extend({

  scenarios: ['---', 'Windows Logon', 'RADIUS', 'Web', '2X'],
  scenario: '---',
  index: 0,
  total: 4,
  isStep1: Ember.computed('index',function(){
      return this.get('index') === 0;
  }),
  percentWidth: Ember.computed('total',function(){
      return 100 - (100 / this.get('total')) + '%';
  }),
  percent: '0%',
  isCurrent(step){
    return this.get('index') === step;
  },

  actions: {
    selectScenario(newscenario) { 
    	this.set('scenario', newscenario);
    },
    backStep(){
        this.decrementProperty('index');
        let current = this.get('index');
        this.set('percent', current / (this.get('total') - 1) * 100+'%');
    },    
    nextStep(){
        this.incrementProperty('index');
        let current = this.get('index');
        this.set('percent', current / (this.get('total') - 1) * 100+'%');
    }
  }

});
