exports.config = {
    specs: [
        './test_works.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'command',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://www.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000,
        expectationResultHandler: function(passed, assertion) {
        }
    },
    onPrepare: function () {
        console.log('<<< BROWSER TESTS STARTED >>>');
    }
}
