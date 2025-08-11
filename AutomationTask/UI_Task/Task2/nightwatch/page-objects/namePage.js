module.exports = {
  elements: {
    firstNameField: '//input[@id="first-name"]',
    lastNameField: '//input[@id="last-name"]',
    continueBtn: '//*[@id="join-form-submit"]',
    securityPopup: '//*[@id="challenge-dialog-modal-header"]'
  },

  commands: [{
    assertNamePageLoaded() {
      return this
        .waitForElementVisible('@firstNameField', 5000)
        .waitForElementVisible('@lastNameField', 5000)
        .waitForElementVisible('@continueBtn', 5000);
    },

    fillNameForm(firstName, lastName) {
      return this
        .setValue('@firstNameField', firstName)
        .setValue('@lastNameField', lastName)
        .click('@continueBtn');
    },

    assertSecurityPopupVisible() {
      return this
        .waitForElementVisible('@securityPopup', 10000);
    }
  }]
};
