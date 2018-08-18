const wdm = require('webdriver-manager-replacement');
const log = require('loglevel');
let selenium = null;

exports.config = {
  specs: [
    './test_skips.js'
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
    chrome = new wdm.ChromeDriver({});
    selenium = new wdm.SeleniumServer({});
    const options = {
      providers: [{
        binary: chrome
      }],
      server: {
        binary: selenium,
        runAsNode: true,
        runAsDetach: true
      }
    };
    return wdm.update(options).then(() => {
      return wdm.start(options);
    });
  },
  onComplete: function () {
    selenium.stopServer();
  }
}
