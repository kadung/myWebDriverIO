
import contactUs from '../pageobjects/ta-contactus.page';

/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('navigating to contact-us page', function() {
  it('should allow user to navigating contact-us page ', function () {
    contactUs.open();     // navigating to login page
    contactUs.waitForContactPageToLoad()
    console.log(contactUs.getPageTitle());
    expect(contactUs.getPageTitle()).toContain('Contact Us')

  });
});
