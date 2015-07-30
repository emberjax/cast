import Ember from 'ember';
import { module, test } from 'qunit';
import startAppAuthorized from 'cast/tests/helpers/start-app-authorized';
import page from '../pages/casts';

let application;
let currentUser;

module('Acceptance | user views casts', {
  beforeEach: function() {
    application = startAppAuthorized();
    currentUser = application.currentUser;
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('lists users own casts', function(assert) {
  server.createList('cast', 3, { content: 'foo', user: currentUser.id });

  page.visit();

  andThen(function() {
    assert.equal(page.casts().count(), 3);
    assert.equal(page.casts(1).content(), 'foo');
  });
});

test('does not see other users casts', function(assert) {
  const otherUser = server.create('user');
  server.createList('cast', 3, { content: 'mine', user: currentUser.id });
  server.createList('cast', 3, { content: 'theirs', user: otherUser.id });

  page.visit();

  andThen(function() {
    assert.equal(page.casts().count(), 3);
    assert.equal(page.casts(1).content(), 'mine');
    assert.equal(page.casts(2).content(), 'mine');
    assert.equal(page.casts(3).content(), 'mine');
  });
});
