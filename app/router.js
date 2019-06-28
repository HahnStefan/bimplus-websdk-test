import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('teams', function() {
    this.route('team', { path: '/:team_slug' });
//    this.route('team');
  });
  this.route('projects');
});

export default Router;
