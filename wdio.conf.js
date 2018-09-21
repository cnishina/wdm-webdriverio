const wdm = require('webdriver-manager-replacement');
const log = require('loglevel');

// Set the log level for webdriver-manager. If this is not set, nothing will log.
log.setLogLevel('info');

// To run this in the test, run as detach must be set to true. If this is not
// set to true, the selenium server standalone process will not return, preventing
// tests from being executed.
const runAsDetach = true;
const options = wdm.initOptions(
  [wdm.Provider.ChromeDriver, wdm.Provider.Selenium],
  runAsDetach);

exports.config = {
  specs: [
    './test.js'
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
    expectationResultHandler: function(passed, assertion) {}
  },
  onPrepare: function () {
    // if value is not set, nothing from wdm gets logged.
    log.setLevel('info');

    // Should create an initOptions method instead of this...
    const options = {
      browserDrivers: [{
        name: 'chromedriver'
      }],
      server: {
        name: 'selenium',
        runAsNode: true,
        runAsDetach: true
      }
    };
    return wdm.update(options).then(() => {
      return wdm.start(options).then(() => {
        // wait for the server to start in detached mode.
      });
    });
  },
  onComplete: () => {
    const options = {server: {runAsNode: true, runAsDetach: true}};
    return wdm.shutdown(options).then(() => {});
  }
}
