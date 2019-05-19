const { createConfig } = require('@rollup-umd/documentation');
const options = require('./src/options');
const styleguideConfig = require('./src/styleguide.config');

const config = createConfig(styleguideConfig, {
  favicon: 'word',
  favicons: require('./src/favicons'), // eslint-disable-line global-require
  loaders: require('./src/loaders'), // eslint-disable-line global-require
  loader: 'word',
  ...options,
});

module.exports = config;
