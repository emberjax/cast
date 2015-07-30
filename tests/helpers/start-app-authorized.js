import Ember from 'ember';
import startApp from './start-app';
import { stubResolver } from '../helpers/container';

export default function startAppAuthorized(attrs, cb) {
  var application;
  let currentUser;

  const mockSession = Ember.Service.extend({
    token: Ember.computed(function() {
      return currentUser.token;
    })
  });

  function login(user) {
    mockSession.token = user.token;
  }

  application = startApp(attrs, function(app) {
    stubResolver(app, 'service:session', mockSession);
    if (typeof cb === 'function') { cb(app); }
  });
  currentUser = server.create('user');
  login(currentUser);
  application.currentUser = currentUser;

  return application;
}
