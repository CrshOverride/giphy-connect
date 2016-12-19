import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  session: service('session'),

  actions: {
    login() {
      this.get('session').authenticate('authenticator:torii', 'facebook-connect');
    }
  }
});
