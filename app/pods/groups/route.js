import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { RSVP: { all } } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('group');
  },
  // Hack to pre-load Users for Groups as the async relationship is broken
  afterModel: function(model) {
    return all(model.mapBy('memberships'));
  },

  actions: {
    dataChanged() {
      this.refresh();
    }
  }
});
