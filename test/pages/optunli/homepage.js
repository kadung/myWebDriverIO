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
    }

    waitForHomePage() {
        if (!this.logo.isDisplayed()) {
            this.logo.waitForDisplayed();
        }
    }

    login(userName, password) {
        this.open();
        this.waitForHomePage();
        this.usernameInput.setValue(userName);
        this.passwordInput.setValue(password);
        this.signInButton.click();
    }

    // Assertion
    checkLoginSuccess(){
        try {
            this.verifyLoginText.waitForDisplayed(5000);
            return true;
        }
        catch (err) { return false; }
    }
}

export default new HomePage()