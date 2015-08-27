export default function(server) {
  server.createList('user', 20);
  const user = server.create('user', { handle: 'code0100fun', token: 'secret' });
  server.createList('cast', 3, { user: user.id });
}
