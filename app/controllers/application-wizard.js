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
      return Ember.String.htmlSafe('width: '+ 100 - (100 / this.get('total')) + '%');
  }),
  percent: Ember.computed('index','total',function(){
    let current = this.get('index');
    return Ember.String.htmlSafe('width: '+ current / (this.get('total') - 1) * 100+'%');     
  }),
  isCurrent(step){
    return this.get('index') === step;
  },

  actions: {
    selectScenario(newscenario) { 
    	this.set('scenario', newscenario);
    },
    backStep(){
        this.decrementProperty('index');
    },    
    nextStep(){
        this.incrementProperty('index');
    }
  }

});
