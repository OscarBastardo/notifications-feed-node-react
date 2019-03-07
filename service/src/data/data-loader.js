class DataLoader {
  constructor(fs, jsonFilePath) {
    this.fs = fs;
    this.jsonFilePath = jsonFilePath;

    const content = this.fs.readFileSync(this.jsonFilePath);
    this.data = JSON.parse(content);
  }
}

module.exports = DataLoader;
