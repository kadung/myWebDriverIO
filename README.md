### Overview

This repository contains an implementation of webdriverIO (v5.x) and libraries that develop automation script with the Jasmine test framework. 

It supports:
- Fully intergrated with webdriverIO.
- ES6, ES8 (via babel-register) .
- Utilities to read data from MS-Excel, queries data from any SQL database or MongoDB.

### Required software

`[NodeJS:](https://nodejs.org/en/download/)` v8 and above.

`JDK 1.8:` JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.

To run your test you must have selenium / Appium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` in the .conf.js.  That's all there is to it !.

💡 Before running mobile tests, perform the requisite Appium setup. For hassle free `one click Appium setup on OSX` refer [appium-setup-made-easy-OSX](https://github.com/amiya-pattnaik/appium-setup-made-easy-OSX) or refer [Appium Docs](http://appium.io/getting-started.html?lang=en)

### Insatllation
- Clone the repo
- Install all required dependency: `npm install`
- Install selenium-standalone: `./node_modules/.bin/selenium-standalone install`
- Run your test: `npm run test:dev`

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files are found in the `/config/` directory and all end with `*.conf.js`.

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.  Please note, this has been added in .config.

To generate and view an allure report locally, run `npm run allure-report`. A typical Allure report will look like this

![ScreenShot](https://github.com/allure-framework/allure2/blob/master/.github/readme-img.png)

Allure has several other reporting tools optimized for the CI server of your choice.  You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

Allure has several other reporting tools optimized for the CI server of your choice.  You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

##### junit/xunit

A WebdriverIO reporter that creates Jenkins compatible XML based JUnit reports. Add it to the reports array in the config file and define the directory where the xml files should get stored. webdriverIO will create an xml file for each instance under test and the filename will contain the browser and OS. Please note, this has been added in .config.

To generate and view an allure report locally, run `npm run junit-report`.

### Develop automation scripts (for both desktop browser and mobile browser / app)

You can write test by using Jasmine BDD framework. You can choose javascript based design pattern or ES6 based. This project is ES6 friendly (via babel-register)

Refer complete [WebdriverIO v5 API](https://webdriver.io/docs/api.html) methods to write your automation tests.

#### Using Jasmine JavaScript framework

Tests are written in the Jasmine framework. More about Jasmine can be found at https://jasmine.github.io/

Tests are place in `*.specs.js` files in the `/test/specs/` directory. A typical test will look similar to this:
```
//example.js
//a simple test using synchronous mode//

describe('WebdriverIO search', function() {

    it('searches for WebdriverIO', function() {
        browser.url('https://duckduckgo.com/');
        $('#search_form_input_homepage').setValue('WebdriverIO');
        $('#search_button_homepage').click();
        var title = browser.getTitle();
        console.log('Title is: ' + title);
    });
});

```
### The Page Object Design Pattern

Within your web app's UI there are areas that your tests interact with. A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. In other wards one of the challenges of writing test automation is keeping your [selectors] (classes, id's, or xpath's etc.) up to date with the latest version of your code.  The next challenge is to keep the code you write nice and [DRY] (Don't Repeat Yourself).  The page object pattern helps us accomplish this in one solution.  Instead of including our selectors in our step definitions(in cucumber) or in Spec file (in Jasmine or Mocha), we instead place them in a `<pagename>.js` file where we can manage all these selectors and methods together. Your test file should only call the test methods.

You can also place reusable functions or logic inside of these pages and call them from your step files. The page object serves as a layer of abstraction between tests and code.  When A test fails, it fails on a individual step.  That step may call a selector that is no longer valid, but that selector may be used by many other steps.  By having a single source of truth of what the selector is supposed to be, fixing one selector on the page object could repair a number of failing tests that were affected by the same selector.

An object called `Page` will be created with the prototype model or by ES6 class pattern.  This ensures that every instance of a page object is exported as a stateless construct. Any any changes to that state are handled in the browser, rather than on the server.

It is preferable to separate page objects into individual files that end with `.page.js`.  These will require the basic `page.js` prototype construct / abstract class and create new objects for each individual page.

For more information on the implementation of `Page Object Design Pattern`, refer to the `/test/pages` directory. A typical page class using ES6 syntax will look similar to this:

```
import Page from './page';
class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return $('//*[@name="username"]'); }
    get passwordInput()   { return $('//*[@name="password"]'); }
    get rememberMe ()     { return $('//*[@id="remember-me"]'); }
    get loginButton()     { return $('//button[contains(., "Login")]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */
    login (username, password) {
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.rememberMe.click();
      this.loginButton.click();
    }
}

export default new LoginPage()

```

### Working with DataBase

When you are actually performing automation testing it is very likely that you need to verify the data between actual (which you got it from browser) vs expected (which you will get it from the database). For more information refer to the example folder `./test/ultilities/example/`.

##### Relational database

A relational database is, simply, a database that stores related information across multiple tables and allows you to query information in more than one table at the same time. 

`node-any-jdbc` library is used to connect and query data from relational database. For trouble shooting and more information, please visit https://www.npmjs.com/package/node-any-jdbc

##### MongoDB

MongoDB is a document database, it stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.

`mongoose` library is used to connect and query data from mongodb. For trouble shooting and more information, please visit https://mongoosejs.com/docs/guide.html

💡 You can get all the schemas and supports from your team if they also use same library 

### Working with MS-Excel

You can user MS-Excel and store your test data, expected data in an excel sheet. Tou can keeep any number of excel sheets you want and use below common methods to puull data from youe sheet to be use as part of testing.  Please note it only support .xlsx file format. For more information refer to the example folder `./test/ultilities/example/`.


### Common utilities

Use [lodash.js](https://lodash.com/) already bundled inside the framework which provides tons of helpers: map, filter, invoke — as well as more specialized goodies: function binding, javascript templating, creating quick indexes, deep equality testing, and so on.
