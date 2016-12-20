import Ember from 'ember';
import UiModal from 'semantic-ui-ember/components/ui-modal';

const { inject: { service } } = Ember;

export default UiModal.extend({
  store: service(),

  name: 'add-group',
  classNames: ['add-group'],

  actions: {
    reset() {
      this.set('groupName', undefined);
    },

    cancel() {
      this.execute('hide');
      this.execute('reset');
    },

    save() {
      const newGroup = this.get('store').createRecord('group', { name: this.get('groupName') });
      newGroup.save();

      this.execute('hide');
      this.execute('reset');

      this.sendAction();
    }
  }
});
