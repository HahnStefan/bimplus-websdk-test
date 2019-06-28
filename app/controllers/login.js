import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  loginName: "",
  password: "",
  userIsLoggedIn: false,
  session: service(),

  actions: {
    authenticate() {
      this.get('session').authenticate(
        this.get('loginName'),
        this.get('password')
      ).then( () => {
        this.set('userIsLoggedIn', true);

        // alert('Logged in');
        // Route to previous route 
        let previousTransition = this.previousTransition;
        if (previousTransition) {
          this.set('previousTransition', null);
          previousTransition.retry();
        } else {
          // Default back to homepage
          this.transitionToRoute('teams');
        }

      }).catch( (err) => {
        this.set('userIsLoggedIn', false);
        // alert('Error with login!' + err);
        this.transitionToRoute('login');
      })
    },
    
    logout () {
      this.set('userIsLoggedIn', false);      
      this.transitionToRoute('login');
    }    
  },
});
