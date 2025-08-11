module.exports = {
   before: function (browser) {
    this.homePage = browser.page.homePage();
    this.contactPage = browser.page.contactPage();
    browser.url(browser.launch_url);
  },

  after: function (browser) {
    browser.end();
  },

  'TC01: Open Home and Contacts Pages and Verify they loaded successfully': function (browser) {
    this.homePage.assertHomePageLoaded();
    this.homePage.navigateToContact();
    this.homePage.assertContactPageSelected();
    this.contactPage.assertContactPageLoaded();
    browser.back();
    this.homePage.assertHomePageLoaded();
  }
};
