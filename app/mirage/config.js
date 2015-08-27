import authorize from './authorize';

export default function() {

  this.get('/api/v1/users/:id');

  this.get('api/v1/users', function(db) {
    return { users: db.users.where({token: 'secret' }) };
  });

  this.get('/api/v1/users/me', function(db, request) {
    return authorize(request, db, (user) => {
      return { user };
    });
  });

  this.post('/api/v1/casts', function(db, request) {
    return authorize(request, db, (user) => {
      const cast = JSON.parse(request.requestBody);
      return { cast: db.casts.insert({ content: cast.content, user: user.id, createdAt: Date.now() }) };
    });
  });

  this.get('/api/v1/casts', function(db, request) {
    return authorize(request, db, (user) => {
      return { casts: db.casts.where({ user: user.id }) };
    });
  });

}
