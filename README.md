### To run this test

```
npm install
npm test
```

### Webdriver-manager as a dependency

In `wdio.config.js`, the following was added to download the binaries, start
the selenium server standalone, and stop the server:


```
const wdm = require('webdriver-manager-replacement');

// Set the log level for webdriver-manager. If this is not set, nothing will log.
wdm.setLogLevel('info');

// To run this in the test, run as detach must be set to true. If this is not
// set to true, the selenium server standalone process will not return, preventing
// tests from being executed.
const runAsDetach = true;
const options = wdm.initOptions(
  [wdm.Provider.ChromeDriver, wdm.Provider.Selenium],
  runAsDetach);
    
exports.config = {

  // <<< Other configurations for wdio >>>

  onPrepare: function () {
    // update binaries and start the server.
    return wdm.update(options).then(() => {
      return wdm.start(options).then(() => {
        // wait for the server to start in detached mode.
      });
    });
  },
  onComplete: function () {
    // shutdown the standalone server.
    return wdm.shutdown(options).then(() => {
      // wait to shutdown the server.
    });
  }
}

```