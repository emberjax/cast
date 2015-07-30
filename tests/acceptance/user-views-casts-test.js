import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'cast/tests/helpers/start-app';
import page from '../pages/casts';

let application;

module('Acceptance | user views casts', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('lists casts', function(assert) {
  server.createList('cast', 3);

  page.visit();

  andThen(function() {
    assert.equal(page.casts().count(), 3);
  });
});

test('lists casts', function(assert) {
  server.create('cast', { content: 'foo' });

  page.visit();

  andThen(function() {
    assert.equal(page.casts(1).content(), 'foo');
  });
});
