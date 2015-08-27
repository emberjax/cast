import Ember from 'ember';

export default Ember.Component.extend({
  users: null,
  didInitAttrs() {
    this.send('refreshList');
  },
  store: Ember.inject.service(),
  actions: {
    refreshList() {
      const params = { following: false };
      this.get('store').query('user', params).then((users) => {
	this.set('users', users);
      });
    }
  }
});
