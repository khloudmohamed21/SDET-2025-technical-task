module.exports = {
  'Search for Dress and Verify Results': function (browser) {
    const homePage = browser.page.homePage();
    const searchResultsPage = browser.page.searchResultsPage();

    browser.url(browser.launch_url);

    homePage.searchFor('dress');
//expected to fail because some products do not have the word "dress" in their title
    searchResultsPage
      .waitForElementVisible('@productTitles', 10000)
      .verifyResultsContain('dress');

    browser.end();
  }
};
