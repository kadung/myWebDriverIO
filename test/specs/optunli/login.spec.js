import HomePage from '../../pages/optunli/HomePage';

describe('Login function', function() {
    it('Email with one account logs in successfully', function() {
        HomePage.login('qaext1@yopmail.com', 'qaext1@yopmail.com');
        expect(HomePage.checkLoginSuccess()).toBe(true);
    });

    // it('Email with multiple account log in successfully', function() {
    //     HomePage.login('qaext1@yopmail.com', 'qaext1@yopmail.com');
    //     expect(HomePage.checkLoginSuccess()).toBe(true);
    // });
});