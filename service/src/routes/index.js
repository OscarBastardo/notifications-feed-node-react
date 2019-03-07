const Router = require('koa-router');

const notifications = require('./notifications');

const router = new Router();

router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.body = {
    data: 'Hello, world!',
  };
});

router.use('/notifications', notifications);

module.exports = router;
