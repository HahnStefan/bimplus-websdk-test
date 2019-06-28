import Route from '@ember/routing/route';

export default Route.extend({

  redirect() {
    this.transitionTo('teams');
  },

  actions: {
    logout () {
      if(this.controllerFor('login').userIsLoggedIn) {
        let loginController = this.controllerFor('login');
        loginController.logout();
        // loginController.set('previousTransistion', transition);
        // this.transitionTo('login');
      }
  
    }
  }
});
