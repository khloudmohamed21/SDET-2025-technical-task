module.exports = {
  elements: {
    body: '//body',
    homeTab: "//img[@src='images/nav/home1g.gif']",
    contactTab: "//img[@src='images/nav/contact1.gif']",
    contactTab_Selected: "//img[@src='images/nav/contact1g.gif']"
  },
  commands: [{
    navigateToContact() {
      return this.click('@contactTab');
    },
    assertHomePageLoaded() {
      return this
        .waitForElementVisible('@body', 5000)
        .verify.elementPresent('@homeTab');
    },
    assertContactPageSelected() {
      return this
        .waitForElementVisible('@body', 5000)
        .assert.elementPresent('@contactTab_Selected');
    }
  }]
};
