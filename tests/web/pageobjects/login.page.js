class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $("#signInName") };
    get inputPassword () { return $("#password") };
    get btnSubmit () { return $("button[id='next']") };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.btnSubmit.waitForDisplayed({ timeout: 20000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
