module.exports = {
    url: 'https://google.com',
    elements: {
      searchBar: {
        selector: '[name="q"]'
      },
      submit: {
        selector: '//input[@name="btnK"]' ,
        locateStrategy: 'xpath'
      }
    }
  };