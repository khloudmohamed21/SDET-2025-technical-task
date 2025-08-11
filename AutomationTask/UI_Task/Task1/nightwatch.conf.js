
module.exports = {
  src_folders: ['test', 'nightwatch/examples'],

  page_objects_path: ['nightwatch/page-objects'],

  plugins: [],

  globals_path: '',

  test_workers: {
    enabled: true // ✅ تشغيل الاختبارات على أكثر من عامل
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--ignore-certificate-errors',
            '--headless=new', // أحدث نسخة من الـ headless
            '--disable-gpu',
            '--window-size=1920,1080'
          ]
        }
      },

      use_xpath: true,

      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
      }
    },

    chrome: {
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

      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
      }
    }
  }
};
