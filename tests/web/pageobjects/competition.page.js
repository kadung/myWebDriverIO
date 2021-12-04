const Page = require('./page');
const { waitSuccessRedirect } = require('../helpers/utils');

class CompetitionPage extends Page {
    get winners() { return $("div[class^='fp-tournament-standing_standingTable']").$$("div[class^='fp-tournament-standing_teamName']") }

    async goToCompetition(name) {
        const href = await $("//h4[contains(text(), '" + name + "')]/ancestor::a").getAttribute('href');
        const competition = await $("h4*=" + name);
        await competition.waitForExist({timeout: 2000});
        await competition.scrollIntoView();
        await competition.waitForClickable({ timeout: 5000 });
        await competition.click();
        await waitSuccessRedirect(href);
    }

    async goToCompetitionSubpage(name) {
        const subpage = await $("a=" + name);
        await subpage.waitForExist({timeout: 2000});
        await subpage.scrollIntoView();
        await subpage.click();
    }

    async getWinner() {
        return await this.winners[0].getText();
    }
}

module.exports = new CompetitionPage();