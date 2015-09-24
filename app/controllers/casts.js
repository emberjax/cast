import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  createdAtDesc: ['createdAt:desc'],
  casts: Ember.computed.sort('model', 'createdAtDesc'),
  actions: {
    createCast(content, done) {
     const cast =  this.store.createRecord('cast', { content });
     cast.save().then(() => done.resolve(cast));
    }
  }
});
