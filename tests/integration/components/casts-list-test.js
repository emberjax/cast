import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('casts-list', 'Integration | Component | casts list', {
  integration: true
});

function secondsAgo(n) {
  return new Date(Date.now() - n * 1000);
}

test('it renders cast cards', function(assert) {
  assert.expect(4);
  const user = { handle: 'foo' };
  const createdAt = secondsAgo(60);
  const cast = { user, content: 'test', createdAt };
  this.set('model', [cast]);
  this.render(hbs`{{casts-list casts=model}}`);
  assert.equal(this.$('.cast-card').length, 1);
  assert.trimEq(this.$('.cast-card .handle').text(), user.handle);
  assert.trimEq(this.$('.cast-card .content').text(), cast.content);
  assert.trimEq(this.$('.cast-card .time').text(), 'a minute ago');
});
