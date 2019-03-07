const { expect } = require('chai');
const lodash = require('lodash');

const data = require('../data');
const NotificationRepository = require('./notification');

describe('notification repository', () => {
  it('should return list of posts with their likes data', () => {
    const notificationRepository = new NotificationRepository(data, lodash);
    const postsLikes = notificationRepository.groupByPostsLikes();
    expect(postsLikes).to.instanceOf(Array);
    expect(postsLikes[0]).to.be.an('object');
    expect(Object.keys(postsLikes[0]).sort()).to.eql(['likes', 'post', 'type']);
    expect(postsLikes[0].type).equals('Like');
    expect(Object.keys(postsLikes[0].post).sort()).to.eql(['id', 'title']);
    expect(postsLikes[0].likes).to.instanceOf(Array);
    expect(Object.keys(postsLikes[0].likes[0]).sort()).to.eql(['id', 'name']);
  });

  it('should return list of posts with their comments data', () => {
    const notificationRepository = new NotificationRepository(data, lodash);
    const postsComments = notificationRepository.groupByPostsComments();
    expect(postsComments).to.instanceOf(Array);
    expect(postsComments[0]).to.be.an('object');
    expect(Object.keys(postsComments[0]).sort()).to.eql(['comments', 'post', 'type']);
    expect(postsComments[0].type).equals('Comment');
    expect(Object.keys(postsComments[0].post).sort()).to.eql(['id', 'title']);
    expect(postsComments[0].comments).to.instanceOf(Array);
    expect(Object.keys(postsComments[0].comments[0]).sort())
      .to.eql(['commentId', 'commentText', 'userId', 'userName']);
  });
});
