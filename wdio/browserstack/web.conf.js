const axios = require('axios')
const fs = require('fs');
let {config} = require('./../wdio.shared.conf');

const currentDay = new Date().toISOString().substr(0,10);
const reportPath = `./reports/${currentDay}/`;

// ==================
// Specify Test Files
// ==================
config.specs = [
    './tests/web/specs/**/*.js'
];

// =============================
// Browserstack specific config
// =============================
// Browserstack authen
config.user = process.env.BS_USER;
config.key = process.env.BS_KEY;

// Use browserstack service
config.services = ['browserstack'];

// Max Instance
config.maxInstances = 1;

// ============
// Capabilities
// ============
config.capabilities = [
    {
        browserName: 'chrome',
        browser_version: 'latest',
        os: 'Windows',
        os_version: '10',
        build: currentDay,
    },
    {
        browser: 'firefox',
        browser_version: 'latest',
        os: 'Windows',
        os_version: '10',
        build: currentDay,
    },
    {
        browser: 'chrome',
        browser_version: 'latest',
        os: 'OS X',
        os_version: 'Big Sur',
        build: currentDay,
    },
    {
        browser: 'chrome',
        browser_version: 'latest',
        device : 'Samsung Galaxy S21',
        os_version : '11',
        build: currentDay,
    },
    {
        browser: 'chrome',
        browser_version: 'latest',
        device : 'iPhone 12',
        os_version : '14',
        build: currentDay,
    },
    {
        browser: 'safari',
        browser_version: 'latest',
        device : 'iPhone 11',
        os_version : '13',
        build: currentDay,
    }
];

// ===========================
// Reporters
// ===========================
config.reporters = (config.reporters ? config.reporters : []).concat([
    [
        "json",
        {
            outputDir: reportPath,
            outputFileFormat: (opts) => {
                return `result-${opts.cid}.json`
            }
        }
    ]
]);

// ===============================
// Send notification when complete
// ===============================
config.onComplete = (exitCode, config, capabilities, results) => {
    const reportFiles = fs.readdirSync(reportPath);
    let finalReport = "There is an issue with the reporter!!!";
    
    if (reportFiles.length > 0) {
        finalReport = "An automation test is completeted \n";

        reportFiles.forEach((name) => {
            let rawdata = fs.readFileSync(reportPath + name);
            let reportJSON = JSON.parse(rawdata);
            finalReport += `
                OS: ${reportJSON.capabilities.platformName}, Browser: ${reportJSON.capabilities.browserName}
                Result: ${reportJSON.state.passed} PASSED, ${reportJSON.state.failed} FAILED, ${reportJSON.state.skipped} SKIPPED
            `;
        })
    }
        
    // Send to team webhook    
    axios.post(
        process.env.TEAM_WEBHOOK_URL,
        { text: finalReport }
    ).then(res => {
        console.log(`statusCode: ${res.status}`)
    })
    .catch(error => {
        console.error(error)
    })
    
},

exports.config = config;
