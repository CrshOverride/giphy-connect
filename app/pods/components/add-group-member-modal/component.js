import Ember from 'ember';
import UiModal from 'semantic-ui-ember/components/ui-modal';

const { inject: { service } } = Ember;

export default UiModal.extend({
  store: service(),

  name: 'add-group-member',
  classNames: ['add-group-member'],

  users: undefined,

  init: function() {
    this._super(...arguments);
    this.set('allUsers', this.get('store').findAll('user'));
  },

  actions: {
    reset() {
      this.set('users', undefined);
    },

    cancel() {
      this.execute('hide');
      this.execute('reset');
    },

    save() {
      this.execute('hide');
      this.execute('reset');
    }
  }
});
