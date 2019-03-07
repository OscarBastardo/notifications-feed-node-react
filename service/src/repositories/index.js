const lodash = require('lodash');

const data = require('../data');
const NotificationRepository = require('./notification');

const notificationRepository = new NotificationRepository(data, lodash);

module.exports = {
  notificationRepository,
};
