import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.store.find('user', 'me');
  }
});
