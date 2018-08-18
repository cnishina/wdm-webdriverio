# `it` block skips. As designed?

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