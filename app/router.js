import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('application-wizard', function() {
    });
  this.route('users', function() {
    });
  this.route('tokens', function() {
    });
  this.route('advanced', function() {
    });

  this.route('service-providers', function() {
    this.route('new');
    this.route('edit', {path: '/:sp_id/edit'});
    });
  this.route('dashboard');
  this.route('license');
});

export default Router;
