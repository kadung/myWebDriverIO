let { config } = require('./appium.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './tests/web/specs/**/*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        browserName: 'chrome',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        
    }
];

exports.config = config;