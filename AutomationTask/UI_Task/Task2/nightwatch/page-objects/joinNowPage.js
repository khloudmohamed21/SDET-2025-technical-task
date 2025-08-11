module.exports = {
  elements: {
    emailField: '//*[@id="email-address"]',
    passwordField: '//*[@id="password"]',
    agreeJoinBtn: '//*[@id="join-form-submit"]'
  },

  commands: [{
    assertJoinNowPageLoaded() {
      return this
        .waitForElementVisible('@emailField', 5000)
        .waitForElementVisible('@passwordField', 5000)
        .waitForElementVisible('@agreeJoinBtn', 5000);
    },

    fillJoinNowForm(email, password) {
      return this
        .setValue('@emailField', email)
        .setValue('@passwordField', password)
        .click('@agreeJoinBtn');
    }
  }]
};
