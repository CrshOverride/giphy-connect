import ENV from '../config/environment';
import Ember from 'ember';

const { inject: { service } } = Ember;

const defaultUsers = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'Jane@doe.com',
    photoUrl: 'https://scontent.fphl1-1.fna.fbcdn.net/v/t1.0-1/p50x50/15319264_10206521456910111_6744843188872875160_n.jpg?oh=9f2ce7296cc4f6c0512a02290663b21a&oe=58F30FE1'
  }, {
    firstName: 'John',
    lastName: 'Smith',
    email: 'John@smith.com',
    photoUrl: 'https://scontent.fphl1-1.fna.fbcdn.net/v/t1.0-1/p50x50/15241425_10101782851249087_6770949125820866173_n.jpg?oh=e13c8e6aa5bf69495f4bed09c23072db&oe=58EC8C9B'
  }, {
    firstName: 'Justin',
    lastName: 'Niessner',
    email: 'CrshOverride@gmail.com',
    photoUrl: 'https://scontent.fphl1-1.fna.fbcdn.net/v/t1.0-1/p40x40/15578854_10112407272687964_1168705570031949104_n.jpg?oh=7355051bb69d958cf7c3b0d970052a45&oe=58E8950F'
  }
];

const defaultGroups = [
  { name: 'Grumpy Cat Lovers!' },
  { name: 'Those With Generic Names' }
];

const defaultGroupMemberships = [
  { firstName: 'Justin', lastName: 'Niessner', name: 'Grumpy Cat Lovers!' },
  { firstName: 'John', lastName: 'Smith', name: 'Those With Generic Names' },
  { firstName: 'Jane', lastName: 'Doe', name: 'Those With Generic Names' }
];

export function initialize(appInstance) {
  const store = appInstance.lookup('service:store');

  // appInstance.inject('route', 'foo', 'service:foo');
  if (window.localStorage.getItem(ENV.localStorageKey) !== null) {
    return;
  }

  defaultUsers.forEach(u => {
    const user = store.createRecord('user', u);
    user.save();
  });

  defaultGroups.forEach(g => {
    const group = store.createRecord('group', g);
    group.save();
  });

  defaultGroupMemberships.forEach(gm => {
    const users = store.query('user', { firstName: gm.firstName, lastName: gm.lastName });
    const groups = store.query('group', { name: gm.name });
    users.forEach(u => {
      groups.forEach(g => {
        const groupMembership = store.createRecord('group-membership', {
          user: u,
          group: g
        });
        groupMembership.save();
      });
    });
  });
}

export default {
  name: 'data',
  initialize
};