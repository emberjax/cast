import DS from 'ember-data';

export default DS.Model.extend({
  handle: DS.attr(),
  token: DS.attr()
});
