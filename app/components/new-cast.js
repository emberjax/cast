import Ember from 'ember';

export default Ember.Component.extend({
  empty: Ember.computed('content', function() {
    return !this.get('content');
  }),
  actions: {
    createCast: function() {
      const done = Ember.RSVP.defer();
      done.promise.then(() => this.set('content', null));
      this.sendAction('create', this.get('content'), done);
    }
  }
});
