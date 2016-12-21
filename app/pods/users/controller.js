import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openModal(name) {
      $('.ui.' + name + '.modal').modal('show');
    },

    deleteUser(user) {
      user.destroyRecord();
      this.send('dataChanged');
    }
  }
});
