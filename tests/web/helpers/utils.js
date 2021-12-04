module.exports = {
    waitSuccessRedirect: async (targetHref) => {
        let href = targetHref;
        // Remove domain when Selenium return absolute path
        if (href.startsWith(process.env.BASE_URL)){
            href = href.replace(process.env.BASE_URL, '');
        }
        // Remove first 2 translation chars except homepage
        if (href.length > 4) href = href.substring(2);
        // Wait until url is changed
        await browser.waitUntil(
            async () => {
                let currentUrl = await browser.getUrl();
                return currentUrl.includes(href);
            },
            { timeout: 5000 }
        );
    },
    clickElement: async (ele) => {
        await ele.scrollIntoView();
        await ele.waitForClickable({timeout: 1000});
        await ele.click();
    }
}