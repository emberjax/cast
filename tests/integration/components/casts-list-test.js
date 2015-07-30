import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('casts-list', 'Integration | Component | casts list', {
  integration: true
});

test('it renders cast cards', function(assert) {
  assert.expect(2);
  const cast = { content: 'test' };
  this.set('model', [cast]);
  this.render(hbs`{{casts-list casts=model}}`);
  assert.equal(this.$('.cast-card').length, 1);
  assert.trimEq(this.$('.cast-card .content').text(), cast.content);
});
