const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['test', 'nightwatch/examples'],
  page_objects_path: ['nightwatch/page-objects'],

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      launch_url: 'http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/',
      desiredCapabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          binary: '/usr/bin/google-chrome-stable',
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
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
      }
    }
  }
};
