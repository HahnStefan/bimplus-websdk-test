import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  projects: service(), // inject the projects service

  beforeModel(transition){
    if(!this.controllerFor('login').userIsLoggedIn) {
      let loginController = this.controllerFor('login');
      loginController.set('previousTransistion', transition);
      this.transitionTo('login');
    }
  },

  model () {
    return this.get('projects').getProjects();
  },

});
