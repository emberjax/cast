import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'cast/tests/helpers/start-app';
import PO from '../page-object';

let application;

var page = PO.build({
  visit: PO.visitable('/casts'),

  casts: PO.collection({
    itemScope: '.cast-card',
  })
});

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
