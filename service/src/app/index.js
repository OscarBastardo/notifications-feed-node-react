const Koa = require('koa');

const router = require('../routes/index');

const PORT = process.env.PORT || 5000;

function createServer() {
  const server = new Koa();

  server.use(router.allowedMethods());
  server.use(router.routes());

  return server;
}

module.exports = createServer;

if (!module.parent) {
  const server = createServer();
  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}
