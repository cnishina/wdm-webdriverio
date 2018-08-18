describe('', () => {
  it('', () => {  // No description skips this test.
    browser.url('http://google.com');
    let title = browser.getTitle();
    console.log('Title was: ' + title);
    expect(title).toBe('foobar');  // should fail.
  });
});

describe('', () => {
  it('', () => {  // No description skips this test.
    console.log('We got here!');
  });
});