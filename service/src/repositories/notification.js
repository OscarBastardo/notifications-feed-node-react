class NotificationRepository {
  constructor(data, lodash) {
    this.data = data;
    this.lodash = lodash;
  }

  groupByPostsLikes() {
    const filterLikes = this.data.filter(notification => notification.type === 'Like');
    const postsLikes = this.lodash.groupBy(filterLikes, notification => notification.post.id);
    const result = [];
    Object.keys(postsLikes).forEach((key) => {
      const likes = [];
      postsLikes[key].forEach((like) => {
        likes.push({
          id: like.user.id,
          name: like.user.name,
        });
      });
      result.push({
        type: 'Like',
        post: {
          id: postsLikes[key][0].post.id,
          title: postsLikes[key][0].post.title,
        },
        likes,
      });
    });
    return result;
  }

  groupByPostsComments() {
    const filterComments = this.data.filter(notification => notification.type === 'Comment');
    const postsComments = this.lodash.groupBy(filterComments, notification => notification.post.id);
    const result = [];
    Object.keys(postsComments).forEach((key) => {
      const comments = [];
      postsComments[key].forEach((comment) => {
        comments.push({
          userId: comment.user.id,
          userName: comment.user.name,
          commentId: comment.comment.id,
          commentText: comment.comment.commentText,
        });
      });
      result.push({
        type: 'Comment',
        post: {
          id: postsComments[key][0].post.id,
          title: postsComments[key][0].post.title,
        },
        comments,
      });
    });
    return result;
  }
}

module.exports = NotificationRepository;
