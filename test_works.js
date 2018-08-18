describe('', () => {
  it('works only IF the it block has a description', () => {
    browser.url('http://google.com');
    let title = browser.getTitle();
    console.log('Title was: ' + title);
    expect(title).toBe('foobar');  // should fail.
  });
});

describe('', () => {
  it('some text', () => {
    console.log('We got here!');
  });
});