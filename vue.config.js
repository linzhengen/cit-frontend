const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        Promise: 'bluebird',
        log: 'consolelog',
      }])
  }
}
