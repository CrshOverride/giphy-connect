import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  photoUrl: attr('string'),
  memberships: hasMany('group-membership')
});
