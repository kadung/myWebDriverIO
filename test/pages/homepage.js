import {isElementExisted} from '../../utilities/common-actions'

class HomePage {
    // Element
    get logo()                  { return $('//img[@src="/assets/images/optunli.png"]') }
    get usernameInput()         { return $('//input[@id="txtEmail"]'); }
    get passwordInput()         { return $('//input[@id="txtPassword"]'); }
    get signInButton()          { return $('//span[text()="Sign in"]'); }
    get invitationButton()      { return $('//a[text()="I have invitation code"'); }
    get createAccountButton()   { return $('//span[text()="Create new account"]'); }
    get createAccountButton()   { return $('//span[text()="Create new company"]'); }
    get verifyLoginText()       { return $('//*[contains(@class,"user-account-info")]'); }

    // Actions
    open() {        
        browser.url('/');
        browser.maximizeWindow();
        waitForHomePage();
    }

    waitForHomePage() {
        if (!this.logo.isDisplayed()) {
            this.logo.waitForDisplayed();
        }
    }

    login(userName, password) {
        this.usernameInput.setValue(userName);
        this.passwordInput.setValue(password);
        this.signInButton.click();
    }

    // Assertion
    checkLoginSuccess(){
        return isElementExisted(this.verifyLoginText, 5000);
    }
}

export default new HomePage()