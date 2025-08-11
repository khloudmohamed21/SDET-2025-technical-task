const data = require('../testData/registrationData');

module.exports = {
  before: function (browser) {
    this.homePage = browser.page.homePage();
    this.joinNowPage = browser.page.joinNowPage();
    this.namePage = browser.page.namePage();

    browser
      .url('https://www.linkedin.com/')
      .pause(3000); // Allow time for page load
  },

  after: function (browser) {
    browser.end();
  },

  'TC01 - Full LinkedIn Registration': function () {
    // Step i: Open the page and verify page loaded
    this.homePage
      .assertHomePageLoaded()
      .navigateToJoinNowPage();

    // Step ii: Fill email & password and click Agree & Join
    this.joinNowPage
      .assertJoinNowPageLoaded()
      .fillJoinNowForm(data.email, data.password);

    // Step iii: Fill name and continue
    this.namePage
      .assertNamePageLoaded()
      .fillNameForm(data.firstName, data.lastName);

    // Step iv: Assert CAPTCHA appears
    this.namePage.assertSecurityPopupVisible();
  }
};
