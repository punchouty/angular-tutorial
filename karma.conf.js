//http://karma-runner.github.io/1.0/config/configuration-file.html
//jshint strict: false
module.exports = function(config) {
  config.set({

    //basePath: './app',

    files: [
      'lib/angular.js',
      'lib/angular-resource.js',
      'lib/angular-ui-router.js',
      'lib/angular-mock.js',
      'js/**/*.js',
      'unit/**/*.js',
      'e2e-tests/**/*.js'
    ],

    logLevel: config.LOG_INFO, // LOG_DEBUG

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantoJS'], // ['Chrome','PhantoJS']

    // plugins: [
    //   'karma-chrome-launcher',
    //   'karma-firefox-launcher',
    //   'karma-phantomjs-launcher',
    //   'karma-jasmine',
    //   'karma-junit-reporter'
    // ],

  });
};
