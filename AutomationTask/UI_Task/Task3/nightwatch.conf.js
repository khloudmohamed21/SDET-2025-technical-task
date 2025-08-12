const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['test', 'nightwatch/examples'],
  page_objects_path: ['nightwatch/page-objects'],

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      launch_url: 'https://automationpractice.multiformis.com/index.php',
      desiredCapabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--ignore-certificate-errors',
            '--headless=new',
            '--disable-gpu',
            '--window-size=1920,1080'
          ]
        }
      },

      use_xpath: false,

      webdriver: {
        start_process: true,       
        host: '127.0.0.1',          
        port: 9515                  
      }
    }
  }
};
