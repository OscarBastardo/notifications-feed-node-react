const fs = require('fs');
const DatabaseLoader = require('./data-loader');

const jsonFilePath = './src/data/notifications-feed.json';

const dataLoader = new DatabaseLoader(fs, jsonFilePath);

const { data } = dataLoader;

module.exports = data;
