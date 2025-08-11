module.exports = {
  elements: {
    productTitles: '.product_list .product-name'
  },
  commands: [{
    verifyResultsContain(term) {
      this.api.elements('css selector', this.elements.productTitles.selector, (res) => {
        res.value.forEach((el) => {
          const elementId = el.ELEMENT || el['element-6066-11e4-a52e-4f735466cecf'];

          this.api.elementIdText(elementId, (txt) => {
            this.verify.ok(
              txt.value.toLowerCase().includes(term.toLowerCase()),
              `"${txt.value}" does NOT contain "${term}"`
            );
          });
        });
      });
      return this;
    }
  }]
};
