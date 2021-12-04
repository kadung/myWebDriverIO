const MainPage = require('./../pageobjects/main.page');
const LoginPage = require('./../pageobjects/login.page');
const CompetitionPage = require('./../pageobjects/competition.page');

describe('FIFA COM smoke test', () => {
    it("Fan can view an article from FIFA frontpage", async () => {
        await MainPage.open();
        await MainPage.clickHeroButton();
        const competitionHeaderText = await MainPage.getFirstNavText();
        expect(competitionHeaderText).toEqual("competitions");
        await MainPage.open();
        const expectedArticleName = await MainPage.goToTheFirstArticle();
        const articleName = await $("h1").getText();
        expect(expectedArticleName).toEqual(articleName);
    });

    it("Fan can view a past competition", async () => {
        await MainPage.open();
        await MainPage.headerNavigation("Competitions", "Men's", "FIFA World Cup™");
        await CompetitionPage.goToCompetition("2018 FIFA World Cup Russia™");
        expect(await CompetitionPage.getWinner()).toEqual("FRANCE");
    });

    it("Fan can view  latest ongoing or upcoming competition", async () => {
        const expectedName = await MainPage.goToLatestCompetition();
        const competitionName = await $("h1[class*='-hero_noTransform']").getText();
        expect(expectedName).toEqual(competitionName);
    });

    it("Translation works properly", async () => {
        await MainPage.open();
        await MainPage.translateTo('Español');
        await MainPage.clickHeroButton();
        const competitionHeaderText = await MainPage.getFirstNavText();
        expect(competitionHeaderText).toEqual("competiciones");
    });
});
    


