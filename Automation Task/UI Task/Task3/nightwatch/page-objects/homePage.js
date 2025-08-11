module.exports = {
  elements: {
    searchBar: '#search_query_top',
    searchButton: 'button[name="submit_search"]'
  },
  commands: [{
    searchFor(term) {
      return this
        .waitForElementVisible('@searchBar', 10000)
        .setValue('@searchBar', term)
        .click('@searchButton');
    }
  }]
};
