// Karma configuration
// Generated on Thu Sep 26 2013 16:43:03 GMT-0400 (EDT)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/main/resources/lib/node-uuid/uuid.js',
            'src/main/resources/lib/lodash/lodash.compat.js',
            'src/main/resources/lib/underscore.string/lib/underscore.string.js',
            'src/main/resources/lib/momentjs/moment.js',
            'src/main/resources/lib/neosavvy-javascript-core/neosavvy-javascript-core.js',
            'src/main/resources/lib/q/q.js',
            'src/main/resources/lib/angular/angular.js',
            'src/main/resources/lib/angular-*/*.js',
            'src/main/resources/lib/neosavvy-javascript-angular-core/neosavvy-javascript-angular-core.js',
            'src/main/resources/application/application.js',
            'src/main/resources/application/**/*.js',
            'src/test/**/*-spec.js'
        ],


        // list of files to exclude
        exclude: [
        ],

        preprocessors: {
            'src/main/resources/application/**/*.js': 'coverage'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage', 'junit'],

        coverageReporter: {
            type: 'html',
            dir: 'target/coverage/'
        },

        junitReporter: {
            outputFile: 'target/coverage/cobertura.unit.xml'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
