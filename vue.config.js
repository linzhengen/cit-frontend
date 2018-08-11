const webpack = require('webpack')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        Promise: 'bluebird',
        log: 'consolelog',
      }])

    // if (process.env.NODE_ENV === 'production') {
    // }
    // config
    //   .plugin('define')
    //   .use(webpack.DefinePlugin, [{
    //     'process.env': {
    //       BASE_URL: '"/"'
    //     }
    //   }])
  },

  lintOnSave: false
}
