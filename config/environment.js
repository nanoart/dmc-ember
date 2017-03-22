/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dmc-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
        apiKey: 'AIzaSyD2hg7T9_5kl8JL61SyK-ikWeW9IThOeTQ',
        authDomain: 'dualshield-b025d.firebaseapp.com',
        databaseURL: 'https://dualshield-b025d.firebaseio.com',
        storageBucket: 'dualshield-b025d.appspot.com',
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
