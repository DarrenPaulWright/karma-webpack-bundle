const wallabyConfig = require('./src/wallabyConfig.js');
const { name } = require('./package.json');

module.exports = wallabyConfig(undefined, { name });
