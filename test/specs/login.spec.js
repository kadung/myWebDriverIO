import { HomePage } from '../pages/homepage';
import { EnvData } from '../test-data/env-data';


describe('Login function', function() {
    it('Email with one account logs in successfully', function() {
        HomePage.open();
        HomePage.login(EnvData.email, EnvData.password);
        expect(HomePage.checkLoginSuccess()).toBe(true);
    });

    // it('Email with multiple account log in successfully', function() {
    //     HomePage.login('qaext1@yopmail.com', 'qaext1@yopmail.com');
    //     expect(HomePage.checkLoginSuccess()).toBe(true);
    // });
});