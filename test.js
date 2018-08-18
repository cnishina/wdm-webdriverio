describe('webdriver-manager with webdriverio', () => {
  it('should launch Google', () => {
    browser.url('http://google.com');
    let title = browser.getTitle();
    console.log('Title was: ' + title);
    expect(title).toBe('Google');
  });
});
