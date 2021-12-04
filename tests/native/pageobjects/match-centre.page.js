class MatchCentrePage {
    get allScoresTab () { return $("~All Scores") } // Xpath: //android.widget.LinearLayout[@content-desc="All Scores"]
    get fixtureCard () { return $("//*[contains(@resource-id,'fixtureCardConstraintLayout')]") }
    get matchInfo () { return $("//*[contains(@resource-id,'matchFactsTextTitle')]") }

    
    async goToAMatchDetail() {
        await this.allScoresTab.click();
        await this.fixtureCard.waitForDisplayed({timeout: 10000})
        await this.fixtureCard.click();
        await this.matchInfo.waitForDisplayed({timeout: 10000})
    }
}

module.exports = new MatchCentrePage();