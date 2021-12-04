const { waitSuccessRedirect, clickElement } = require('../helpers/utils');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     async checkOntrustCookie () {
        try {
            const onetrust = await $("#onetrust-accept-btn-handler");
            await onetrust.waitForClickable({ timeout: 3000 })
            await onetrust.click();
            await onetrust.waitForClickable({ timeout: 3000, reverse: true })
        }
        catch { };
    }

    async open (path) {
        await browser.url(path ? process.env.BASE_URL + path : process.env.BASE_URL);
        if (!driver.isMobile)   await browser.maximizeWindow();
        await this.checkOntrustCookie();
    }

    async headerNavigation(firstMenu, secondMenu, thirdMenu) {
        let href = "";

        // Mobile browser
        if (driver.isMobile) {
            await this.openMobileNav();
            const firstElement = await $('p=' + firstMenu);

            if (typeof secondMenu === 'undefined' && typeof thirdMenu === 'undefined') {
                const firstElementParent = await firstElement.parentElement();
                href = await firstElementParent.getAttribute('href');
                await firstElement.click();
            }
            else if (typeof secondMenu != 'undefined' && typeof thirdMenu === 'undefined') {
                await $(`//p[contains(@class, 'ff-mobile-header-menu-second-level-item') and contains(text(),"${firstMenu}")]//following::div`).click();
                const secondElement = await $('p=' + secondMenu);
                const secondElementParent = await secondElement.parentElement();
                href = await secondElementParent.getAttribute('href');
                await secondElement.click();
            }
            else{
                await $(`//p[contains(@class,'ff-mobile-header-menu-first-level-item') and contains(text(),"${firstMenu}")]//following::div`).click();
                await $(`//p[contains(@class,'ff-mobile-header-menu-second-level-item') and contains(text(),"${secondMenu}")]//following::div`).click();
                const thirdElement = $('p=' + thirdMenu);
                const thirdElementParent = await thirdElement.parentElement();
                href = await thirdElementParent.getAttribute('href');
                await thirdElement.click();
            }
        }
        // Desktop browser
        else {
            const firstElement = await $('a=' + firstMenu);
            if (typeof secondMenu === 'undefined' && typeof thirdMenu === 'undefined') {
                href = await firstElement.getAttribute('href');
                await firstElement.click();
            }
            else if (typeof secondMenu != 'undefined' && typeof thirdMenu === 'undefined') {
                await firstElement.moveTo();
                const secondElement = await $('a=' + secondMenu);
                href = await secondElement.getAttribute('href');
                await secondElement.click();
            }
            else{
                await firstElement.moveTo();
                const thirdElement = await $('a=' + thirdMenu);
                href = await thirdElement.getAttribute('href');
                await thirdElement.click();
            }
        }
        
        await waitSuccessRedirect(href);
        await this.checkOntrustCookie();
    }

    async goToLatestCompetition() {
        let href, name;

        // Mobile browser
        if (driver.isMobile) {
            await this.openMobileNav();
            await $(`div[class*='ff-mobile-header-menu-first-level-item_expandIcon']`).click();
            await $(`div[class*='ff-mobile-header-menu-second-level-item_expandIcon']`).click();
            const lastestCompetition = await $(`p[class*='ff-mobile-header-menu-third-level-item'`);
            const lastestCompetitionParent = await lastestCompetition.parentElement();
            name = await lastestCompetition.getText();
            href = await lastestCompetitionParent.getAttribute('href');
            await lastestCompetition.click();
        }
        else {
            const latestCompetition = $("//a[contains(text(),'In focus')]/following-sibling::li/a");
            await $('a=Competitions').moveTo();
            name = await latestCompetition.getText();
            href = await latestCompetition.getAttribute('href');
            await latestCompetition.click();
        }
        
        await waitSuccessRedirect(href);
        return name;
    }

    async translateTo(lang) {
        const logo = await $("a[class*='fc-header_logoLink']");
        const transDropdown = await $("button[class^='ff-dropdown-with-router_dropupButton']");
        await clickElement(transDropdown);
        const langOption = await $("a=" + lang);
        const href = await langOption.getAttribute("href");
        await clickElement(langOption);
        await waitSuccessRedirect(href);
    }

    // Mobile specific
    async openMobileNav(){
        await $("nav[class*='ff-mobile-header-navbar_navContainer'] > div").click();
    }
}
