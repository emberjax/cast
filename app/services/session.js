import Ember from 'ember';
import computedPromise from 'cast/utils/computed-promise';

export default Ember.Service.extend({
  store: Ember.inject.service('store:main'),
  token: Ember.computed(function() {
    return 'secret';
  }),
  currentUser: computedPromise('token', function(){
    return this.get('store').find('user', { token: this.get('token') }).then(function(users) {
      return users.get('firstObject');
    });
  })
});
