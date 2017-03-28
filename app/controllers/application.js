import Ember from 'ember';
const locales = ['en-us', 'en-gb', 'fr-fr', 'zh-cn'];
export default Ember.Controller.extend({
        intl: Ember.inject.service(),
        locales: locales,
        defCountry: locales[0],
        pinMode: true,
        advanced: false,
        actions: {
                changeLocale(localeName)  {
                        this.get('intl').setLocale(localeName);
                        this.set('defCountry',localeName );
                },
                togglePinMode()
                {
                        this.toggleProperty('pinMode');
                
                },
                clickMenuItem(menuItem){
                        this.toggleProperty(menuItem);
                }
        }
});
