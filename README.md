## This boilerplate includes the following:

- Test framework: Jasmine.
- Configs for: browser (desktop and mobile) and native app.
- BrowserStack integration.
- Page Objects Model.
- Aggregate report and Teams notification.

## Installation

- Install [NodeJS](https://nodejs.org/en/download/).
- Install [VSCode](https://code.visualstudio.com/download).

## Setup

- Add JAVA_HOME variables to the OS.
- Clone the code to your expected folder.
- Open code with VSCode tool.
- Run below command to install dependencies:
  > npm run install

## Test configs

Run test cases with below command:

> npm run [Config]

Config includes:

- browser.desktop
- browser.mobile
- native
- browserstack

Update the [capabilities](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities) in wdio folder to execute test with different browsers or mobile devices.

## Example environment file

DEBUG=false
BASE_URL="https://www.fifa.com/"
APP_PATH="androidApp.apk"
BS_USER=""
BS_KEY=""
TEAM_WEBHOOK_URL = ""
