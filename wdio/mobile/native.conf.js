const {join} = require('path');
let {config} = require('./appium.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './tests/native/specs/**/*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,

        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:app': join(process.cwd(), './apps/', process.env.APP_PATH),
        // 'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',

        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
    }
];

exports.config = config;