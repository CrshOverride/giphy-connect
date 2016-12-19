import DS from 'ember-data';

const { belongsTo } = DS;

export default DS.Model.extend({
  user: belongsTo('user', { async: true, autoSave: true }),
  group: belongsTo('group', { async: true, autoSave: true })
});
