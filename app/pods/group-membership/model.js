import DS from 'ember-data';

const { belongsTo } = DS;

export default DS.Model.extend({
  user: belongsTo('user'),
  group: belongsTo('group')
});
