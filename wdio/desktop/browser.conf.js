let { config } = require('../wdio.shared.conf');

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
        browserName: 'chrome',
        maxInstances: 1,       
    },
    // {
    //     browserName: 'firefox',
    //     maxInstances: 1,       
    // }
];

// ===========================
// Selenium Standalone Service
// ===========================
config.services = (config.services ? config.services : []).concat([
    [
        'selenium-standalone',
        {
            drivers: { firefox: true, chrome: true, chromiumedge: true } 
        }
    ],
]);

exports.config = config;