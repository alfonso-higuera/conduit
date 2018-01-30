// use the same babel compilation etc. as what's defined in the webpack config
var webpackConfig = require('./webpack.config.js');

process.env.CHROME_BIN = require('puppeteer').executablePath()

// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      { pattern: 'test/*.+(js|jsx)', watched: false }, // all js, jsx files in "test/"
    ],
    preprocessors: {
      'test/*.+(js|jsx)': ['webpack']
    },
    reporters: ['nyan'],
    browsers: ['ChromeHeadless'],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'normal'
    }
  });
};
