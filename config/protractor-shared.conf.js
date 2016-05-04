var grunt = require('grunt');
var allScriptsTimeout = 11000;

exports.config = {
    allScriptsTimeout: allScriptsTimeout,

    framework: 'jasmine',

    params: {
        environment: 'BUILD',
        dependencyPath: './bower_components'
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(allScriptsTimeout);
    },
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 40000
    }
};