import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-cast', 'Integration | Component | new cast', {
  integration: true
});

test('shows placeholder', function(assert) {
  assert.expect(1);
  this.render(hbs`{{new-cast}}`);
  assert.equal(this.$('.content label').text(), "What's happening?");
});
