import Ember from 'ember';
import UiModal from 'semantic-ui-ember/components/ui-modal';

const { inject: { service } } = Ember;

export default UiModal.extend({
  store: service(),

  name: 'add-user',
  classNames: ['add-user'],

  error: undefined,

  actions: {
    reset() {
      this.set('id');
      this.set('firstName');
      this.set('lastName');
      this.set('email');
      this.set('photoUrl');
    },

    cancel() {
      this.execute('hide');
      this.execute('reset');
    },

    save() {
      if (!this.get('id') || !this.get('firstName') || !this.get('lastName') || !this.get('email') || !this.get('photoUrl')) {
        this.set('error', "All fields are required!");
      }

      this.set('error', undefined)

      const newUser = this.get('store').createRecord('user', {
        id: this.get('id'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        photoUrl: this.get('photoUrl')
      }).save();

      this.execute('hide');
      this.execute('reset');

      this.sendAction();
    }
  }
});
