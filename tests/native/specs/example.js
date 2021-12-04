const { performancetotal } = require ("wdio-performancetotal-service");
const TermService = require('../helpers/term-service');
const BottomNavBar = require('../helpers/bottom-navbar');
const NewsPage = require('../pageobjects/news.page');
const MatchCentrePage = require('../pageobjects/match-centre.page');

describe('Fan view an article', () => {
    it('open app', async () => {
        performancetotal.sampleStart("View a match detail");
        await TermService.accept();
        await BottomNavBar.goToTab("Match Centre");
        await MatchCentrePage.goToAMatchDetail();
        performancetotal.sampleEnd("View a match detail");
    });
});