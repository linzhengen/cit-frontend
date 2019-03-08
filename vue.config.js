/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  chainWebpack: (config) => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        Promise: 'bluebird',
        log: 'consolelog',
      }]);
  },
  lintOnSave: false,
};
