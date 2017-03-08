import Ember from 'ember';

export default Ember.Controller.extend({

  scenarios: ['---', 'Windows Logon', 'RADIUS', 'Web', '2X'],
  scenario: '---',
  actions: {
    selectScenario(newscenario) { 
    	this.set('scenario', newscenario);
    }
  }

});
