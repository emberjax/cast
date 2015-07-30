import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('casts-list', 'Integration | Component | casts list', {
  integration: true
});

test('it renders cast cards', function(assert) {
  assert.expect(1);
  this.set('model', [{}]);
  this.render(hbs`{{casts-list casts=model}}`);
  assert.equal(this.$('.cast-card').length, 1);
});
