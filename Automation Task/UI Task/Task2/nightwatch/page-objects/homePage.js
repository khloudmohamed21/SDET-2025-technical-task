module.exports = {
  elements: {
    joinNowBtn: {
      selector: "//a[contains(@class, 'nav__button-tertiary') and contains(text(), 'Join now')]",
      locateStrategy: 'xpath'
    }
  },

  commands: [{
    assertHomePageLoaded() {
      return this
        .waitForElementVisible('@joinNowBtn', 10000);
    },

    navigateToJoinNowPage() {
      return this
        .click('@joinNowBtn');
    }
  }]
};
