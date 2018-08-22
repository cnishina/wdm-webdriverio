describe('a test', () => {
  it('should navigate to google', () => {
    browser.url('http://google.com');
    let title = browser.getTitle();
    console.log('Title was: ' + title);
    expect(title).toBe('Google');
  });
});