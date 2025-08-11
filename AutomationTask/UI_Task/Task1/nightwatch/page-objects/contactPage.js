module.exports = {
  elements: {
    body: '//body',
    contactHeader: "//p[text()='CONTACT ACME CHEMICALS']"
  },
  commands: [{
    assertContactPageLoaded() {
      return this
        .waitForElementVisible('@body', 5000)
        .assert.elementPresent('@contactHeader');
    }
  }]
};
