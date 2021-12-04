let { config } = require('../wdio.shared.conf');

// =====================
// Appium Configurations
// =====================
config.services = (config.services ? config.services : []).concat([
    [
        'appium',
        {
            // This will use the globally installed version of Appium
            command: 'appium',
            args: {
                // This is needed to tell Appium that we can execute local ADB commands
                // and to automatically download the latest version of ChromeDriver
                relaxedSecurity: true,
            },
        },
    ],
    [
        'performancetotal',
        // The options (with default values)
        {
            disableAppendToExistingFile: false,
            performanceResultsFileName: "performance-data",
            dropResultsFromFailedTest: true,
            performanceResultsDirectory: "performance-results",
            analyzeByBrowser: false
        }
    ]
]);

// =====================
// Server Configurations
// =====================
config.port = 4723;

exports.config = config;