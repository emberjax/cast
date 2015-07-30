import Ember from 'ember';
import { module, test } from 'qunit';
import startAppAuthorized from 'cast/tests/helpers/start-app-authorized';
import page from '../pages/casts';

let application;

module('Acceptance | user creates cast', {
  beforeEach: function() {
    application = startAppAuthorized();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('it is added to the list', function(assert) {
  page
    .visit()
    .newCast()
    .content('test')
    .submit();

  andThen(function() {
    assert.equal(page.casts(1).content(), 'test');
  });
});
