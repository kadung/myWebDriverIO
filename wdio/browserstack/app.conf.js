let {config} = require('./../wdio.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './tests/mobile/specs/**/*.js'
];

// =============================
// Browserstack specific config
// =============================
// Browserstack authen
config.user = process.env.BS_USER;
config.key = process.env.BS_KEY;
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
        'browserstack.debug': true,

        // Set URL of the application under test
        app: 'bs://f29e3bf4aa1d0c922fe6a15dc4c9116643a6c959',

        // Specify device and os_version for testing
        device: 'Google Pixel 3',
        os_version: '9.0',

        // Set other BrowserStack capabilities
        project: 'First NodeJS project',
        build: 'Node Android',
        name: 'first_test'
    },
];

exports.config = config;
