import Ember from 'ember';

export default Ember.Component.extend({
    scenarios: ['---', 'Email', 'SMS', 'Telephone', 'HTTP','Twitter'],
    scenario: 'Email',
    actions:{
        submitGateway(param)
        {

        },
        removeDomain()
        {

        },
        addDomain()
        {

        }
    }
});
