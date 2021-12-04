class News {
    /**
     * define selectors using getter methods
     */
    get article () { return $("//*[contains(@resource-id,'articleTitleTv')]") }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */ 
    async clickFirstArticle() {
        await this.article.waitForDisplayed( {timeout: 3000} );
        await this.article.click();
    }
}

module.exports = new News();