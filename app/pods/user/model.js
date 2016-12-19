import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { attr, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  photoUrl: attr('string'),
  memberships: hasMany('group-membership', { async: true, dependent: 'destroy' }),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  groups: computed('memberships.@each', function() {
    return this.get('memberships').mapBy('group');
  })
});
