import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store:main'),
  token: Ember.computed(function() {
    return 'secret';
  }),
  currentUser: Ember.computed('token', function() {
    return this.get('store').filter('user', (user) => {
      return user.get('token') === this.get('token');
    }).then((users) => {
      return users.get('firstObject');
    });
  })
});
