import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  teams: service(), // inject the teams service


  // beforeModel(transition){
  //   if(!this.controllerFor('login').userIsLoggedIn) {
  //     let loginController = this.controllerFor('login');
  //     loginController.set('previousTransistion', transition);
  //     this.transitionTo('login');
  //   }
  // },

  // model() {
  //   // return this.get('teams').getTeamBySlug(params['team_slug']);
  //   return [{
  //     name: "lully-name",
  //     display: "lully-displayname",
  //     slug: "lully-slug",
  //     id: "lully-id",
  //   }];
  // },

  model(params) {
    return this.get('teams').getTeamBySlug(params['team_slug']);
  },

});
