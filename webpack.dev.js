const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devServer: {
    hot: true,
    stats: {
      colors: true,
    },
    contentBase: '/public',
    host: '0.0.0.0',
    port: 4211,
    // proxy: {
    //   '/api': 'http://ac-movie-api:4211'
    // }
  },
});
