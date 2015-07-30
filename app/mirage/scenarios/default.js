export default function(server) {
  server.createList('user', 3);
  const user = server.create('user', { token: 'secret' });
  server.createList('cast', 3, { user: user.id });
}
