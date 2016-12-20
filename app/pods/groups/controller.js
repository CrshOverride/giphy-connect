import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openModal(name) {
      $('.ui.' + name + '.modal').modal('show');
    },

    removeUserFromGroup(membership) {
      this.get('store').deleteRecord(membership);
      this.send('dataChanged');
    },

    deleteGroup(group) {
      this.get('store').deleteRecord(group);
      this.send('dataChanged');
    }
  }
});
