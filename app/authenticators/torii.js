import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

const { inject: { service } } = Ember;

export default ToriiAuthenticator.extend({
  torii: service(),
  ajax: service(),
  store: service(),

  authenticate() {
    return this._super(...arguments).then((data) => {
      console.log(data);

      const fields = 'first_name, last_name, picture, email';
      const url = `https://graph.facebook.com/v2.8/${data.userId}?access_token=${data.accessToken}&fields=${fields}`;

      return this.get('ajax').request(url, {
        type: 'GET'
      }).then((userData) => {
        const user = this.get('store').createRecord('user', {
          id: data.userId,
          firstName: userData.first_name,
          lastName: userData.last_name,
          email: userData.email,
          photoUrl: userData.picture.data.url
        });

        user.save();

        return {
          userId: data.userId,
          accessToken: data.accessToken,
          firstName: userData.first_name,
          lastName: userData.last_name,
          photoUrl: userData.picture.data.url
        };
      });
    });
  }
});
