import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  session: Ember.inject.service('session'),
  headers: Ember.computed('session.token', function() {
    const token = this.get('session.token');
    if(token) {
      return { 'Authorization': `Bearer ${token}` };
    }
  })
});
