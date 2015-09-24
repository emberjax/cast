import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('who-to-follow', 'Integration | Component | who to follow', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  server.create('user', {handle: 'foo'});
  server.create('user', {handle: 'bar'});
  server.create('user', {handle: 'baz'});

  this.render(hbs`{{who-to-follow}}`);

  Ember.run.later(() => {
    assert.ok(/Who to follow/.test(this.$().text().trim()));

    ['foo','bar','baz'].forEach((handle) => {
      assert.ok((new RegExp(handle)).test(this.$().text().trim()));
    });
  }, 0);
});
