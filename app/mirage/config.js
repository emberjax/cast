import authorize from './authorize';

export default function() {

  this.get('/api/v1/users/:id');

  this.put('api/v1/follow/skip/:id', function(db, request) {
    const user = db.users.find(request.params.id);
    user.skipped = true;
    return { users: whoToFollow(db, 1) };
  });

  this.put('api/v1/follow/skip', function(db, request) {
    db.users.filter(function(user) {
      if (JSON.parse(request.requestBody).user_ids.indexOf(user.id+"") !== -1) {
	db.users.update(user.id, {skipped: true});
      }
    });
    return { users: whoToFollow(db, 3) };
  });

  function whoToFollow(db, n) {
    const users = db.users.filter(function(user) {
      return user.token !== 'secret' && !user.skipped; // not me
    }).slice(0, n);
    return users;
  }

  this.get('api/v1/users', function(db, request) {
    if (request.queryParams.following === 'false') {
      const count = ~~request.queryParams.count;
      return { users: whoToFollow(db, count) };
    }
    return { users: [] };
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
