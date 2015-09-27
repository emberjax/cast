import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import setupRouter from '../../helpers/setup-router';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true,
  setup() {
    setupRouter(this);
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#nav-bar}}
      Page Content
    {{/nav-bar}}
  `);

  assert.equal(this.$('nav a').attr('href'), '/casts');
  assert.equal(this.$('main').text().trim(), 'Page Content');
});
