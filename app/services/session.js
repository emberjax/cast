import Ember from 'ember';

export default Ember.Service.extend({
  token: Ember.computed(function() {
    return 'secret';
  })
});
