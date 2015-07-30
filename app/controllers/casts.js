import Ember from 'ember';

export default Ember.Controller.extend({
  casts: Ember.computed('model', function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['id'],
      sortAscending: false,
      content: this.get('model')
    });
  }),
  actions: {
    createCast(content, done) {
     const cast =  this.store.createRecord('cast', { content });
     cast.save().then(() => done.resolve(cast));
    }
  }
});
