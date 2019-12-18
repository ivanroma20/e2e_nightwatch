module.exports = {
  '@tags': ['google'],
  'Test': function (browser) {
    var google = browser.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .pause(1000)
      .click('@submit');

    browser.end();
  }
};