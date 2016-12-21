/* globals $ */
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openModal(name) {
      $('.ui.' + name + '.modal').modal('show');
    },

    removeUserFromGroup(membership) {
      membership.destroyRecord();
      this.send('dataChanged');
    },

    deleteGroup(group) {
      group.destroyRecord();
      this.send('dataChanged');
    },

    addUserToGroup(group, user) {
      this.get('store').queryRecord('group-membership', {
        filter: {
          user: {
            id: user.get('id')
          },
          group: {
            id: group.get('id')
          }
        }
      }).then(gm => {
        if (gm) {
          return;
        }

        this.get('store').createRecord('group-membership', {
          user,
          group
        }).save();


        this.send('dataChanged');
      });
    }
  }
});
