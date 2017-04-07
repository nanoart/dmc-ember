import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    scenarios: ['---', 'Email', 'SMS', 'Telephone', 'HTTP','Twitter'],
    scenario: 'Email',
    config: {
        email:{},
        sms:{}
    },

    init() {
        this._super(...arguments);

        if(this.item.get('config'))
        {
            this.set('config', JSON.parse(this.item.get('config')));
        }

    },

    actions:{
        submitGateway(item)
        {
            this.item.config = JSON.stringify(this.get('config'));
            this.item.save().then(() => this.sendAction('action'));
            //the action value is actually defined on its parent's new.hbs

        },
        removeDomain()
        {

        },
        addDomain()
        {

        }
    }
});
