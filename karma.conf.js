module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],

    files: [
      'test/app/index_test.js',
    ],

    preprocessors: {
      'test/app/index_test.js': [
        'webpack',
        'sourcemap'
      ],
    },

    webpack: require('./webpack.config'),

    reporters: ['mocha'],
    browsers: ['ChromeHeadless'],
  });
};
