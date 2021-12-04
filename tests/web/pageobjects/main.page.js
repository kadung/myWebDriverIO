const Page = require('./page');
const { waitSuccessRedirect } = require('../helpers/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logo() { return $("a[aria-label='FIFA']") }
    get heroButton() { return $("div[class^='fc-hero_hero__text'] a") }
    get loginButton() { return $("div=Login") }
    get loginName() { return $("div[class*='fc-header_text']") }
    get articleCard() { return $("p[class*='ff-article-card_articleTitle']") }
    get articleCardHref() { return $("a[class*='ff-article-card_activeBorder']") }
    get FirstDesktopNav() { return $("li[class^='fc-header-nav-item_linkLayout'] > a") }
    // Mobile selector
    get FirstMobileNav () { return $("p[class*='ff-mobile-header-menu-first-level-item_firstLevelTitle']") }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async getLoginName () {
        await this.loginName.waitForDisplayed({timeout : 5000});
        return await this.loginName.getText();
    }

    async getFirstNavText() {
        let headerText;
        if (driver.isMobile) {
            await this.openMobileNav();
            headerText = await this.FirstMobileNav.getText();
        }
        else {
            headerText = await this.FirstDesktopNav.getText();
        }
        
        return headerText.toLowerCase();
    }

    async clickHeroButton() {
        const href = await this.heroButton.getAttribute('href');
        await this.heroButton.scrollIntoView();
        await this.heroButton.waitForClickable({timeout : 3000});
        await this.heroButton.click();
        await waitSuccessRedirect(href);
    }

    async goToTheFirstArticle() {
        await this.articleCard.scrollIntoView();
        await this.articleCard.waitForClickable({timeout : 3000});
        const articleName = await this.articleCard.getText();
        const href = await this.articleCardHref.getAttribute('href');
        await this.articleCard.click();
        await waitSuccessRedirect(href);
        return articleName;
    }
}

module.exports = new MainPage();
