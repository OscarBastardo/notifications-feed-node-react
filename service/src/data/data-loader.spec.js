const { expect } = require('chai');
const fs = require('fs');

const DataLoader = require('./data-loader');

describe('data loader', () => {
  it('should load JSON file in data attribute', () => {
    const jsonFilePath = './src/data/notifications-feed.json';
    const dataLoader = new DataLoader(fs, jsonFilePath);
    const { data } = dataLoader;
    expect(data).to.instanceOf(Array);
    expect(data[0]).to.be.an('object');
  });
});

