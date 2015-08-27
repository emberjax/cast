import Ember from 'ember';

export default Ember.Component.extend({
  users: null,
  didInitAttrs() {
    this.send('refreshList');
  },
  store: Ember.inject.service(),
  actions: {
    refreshList() {
      const params = { following: false, count: 3 };
      this.get('store').query('user', params).then((users) => {
	this.set('users', users);
      });
    },
    skipAll() {
      Ember.$.ajax('/api/v1/follow/skip', {
	method: 'PUT',
	data: JSON.stringify({ user_ids: this.get('users').mapBy('id') }),
	dataType: 'json'
      }).then(({ users }) => {
	const newUsers = users.map((user)=>{
	  return this.get('store').push('user', user);
	});
	this.set('users', newUsers);
      });
    }
  }
});
