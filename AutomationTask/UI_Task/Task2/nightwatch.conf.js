// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['test', 'nightwatch/examples'],

  page_objects_path: ['nightwatch/page-objects'],

  plugins: [],

  globals_path: '',

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://www.linkedin.com/',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--incognito',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--ignore-certificate-errors',
            '--headless=new'
          ]
        }
      },

      use_xpath: true,

      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515,
        cli_args: []
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--incognito',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--ignore-certificate-errors',
            '--headless=new'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515,
        cli_args: []
      }
    }
  }
};
