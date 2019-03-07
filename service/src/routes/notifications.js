const Router = require('koa-router');
const { notificationRepository } = require('../repositories');

const router = new Router();

router.get('/', (ctx) => {
  try {
    ctx.status = 200;
    const postsLikes = notificationRepository.groupByPostsLikes();
    const postsComments = notificationRepository.groupByPostsComments();
    const notifications = postsLikes.concat(postsComments);
    ctx.body = notifications;
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router.routes();
