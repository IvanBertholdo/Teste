// index.js
const fastify = require('fastify')({ logger: true });
const port = process.env.PORT || 3000;

fastify.get('/', (request, reply) => {
  reply.send('Hello from Vercel!');
});

fastify.get('/api/users', async (request, reply) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  reply.send(users);
});

fastify.listen({ port: port }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`Server listening at ${address}`);
  });

module.exports = fastify;
