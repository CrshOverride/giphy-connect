import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { RSVP: { hash } } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return hash({
      groups: this.store.findAll('group'),
      users: this.store.findAll('user')
    });
  },

  actions: {
    dataChanged() {
      this.refresh();
    }
  }
});
