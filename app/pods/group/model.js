import Ember from 'ember';
import DS from 'ember-data';

const { attr, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  name: attr('string'),
  memberships: hasMany('group-membership', { async: true, dependent: 'destroy' }),

  users: computed('memberships.@each', function() {
    return this.get('memberships').mapBy('user');
  }),

  isEmpty: computed('users', function() {
    return this.get('users.length') === 0;
  })
});
