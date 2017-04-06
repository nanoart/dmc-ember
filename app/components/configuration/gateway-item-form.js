import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    scenarios: ['---', 'Email', 'SMS', 'Telephone', 'HTTP','Twitter'],
    scenario: 'Email',
    config: {
        email:{},
        sms:{}
    },
    actions:{
        submitGateway()
        {
            var assertionAttribute = this.get('store').createRecord('gateway', {
                name: attrComposer.name,
                mapTo: attrComposer.mapTo,
                mapType: attrComposer.mapType,
                location:attrComposer.location,
                config:JSON.stringify(config)
            });

        },
        removeDomain()
        {

        },
        addDomain()
        {

        }
    }
});
