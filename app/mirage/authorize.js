import Mirage from 'ember-cli-mirage';

function tokenForRequest(request) {
  const authHeader = request.requestHeaders['Authorization'];
  return authHeader && authHeader.split(' ')[1];
}

function userForToken(token, db) {
  return db.users.where({ token })[0];
}

export default function authorize(request, db, success) {
  const token = tokenForRequest(request);
  if(token) {
    const user = userForToken(token, db);
    if(user) {
      return success(user);
    } else {
      return new Mirage.Response(401, {}, 'Bad token');
    }
  } else {
    return new Mirage.Response(401, {}, 'No authorization token found');
  }
}
