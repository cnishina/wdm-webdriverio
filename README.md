# `it` block skips. As designed?

### Version

wdio: 4.13.2
wdio-jasmine-framework: 0.3.5

### This test skips

`npm run skips` or `wdio wdio_skips.conf.js`

```
describe('', () => {
  it('', () => {  // No description skips this test.
    console.log('We got here!');
  });
});
```

### This test runs

`npm test` or `wdio wdio.conf.js`

```
describe('', () => {
  it('some text', () => {
    console.log('We got here!');
  });
});
```