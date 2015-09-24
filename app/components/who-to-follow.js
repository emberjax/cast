import Ember from 'ember';

export default Ember.Component.extend({
  didInitAttrs() {
    this.send('fetchUsers');
  },
  store: Ember.inject.service(),
  actions: {
    fetchUsers() {
      const params = { following: false, count: 3 };
      this.get('store').query('user', params).then((users) => {
	this.set('users', users);
      });
    },
    skip(user) {
      Ember.$.ajax('/api/v1/follow/skip', {
	method: 'PUT',
	data: JSON.stringify({ user_ids: [user.get('id')] }),
	dataType: 'json'
      }).then(({ users: [u] }) => {
	const newUser = this.get('store').push('user',u);
	const newUsers = this.get('users').removeObject(user)
	newUsers.pushObject(newUser)

	this.set('users', newUsers);
      });
    },
    my-feature-template.hbs
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
