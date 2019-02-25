
import LoginPage from '../pages/ta-login.page';
import assert from 'assert';
import utl from '../../utilities/common-utilities';
//var utl = require('../../utilities/common-utilities');


/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('phptravels.net login page', function() {
  it('should allow user to login ', function () {
    LoginPage.open();     // navigating to login page
    LoginPage.login('user@phptravels.com', 'demouser');    // entering user name, password and and submiting the page
    //browser.pause(2000);
  });
});
