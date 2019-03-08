import { HomePage } from '../pages/homepage';
import { EnvData } from '../test-data/env-data';


describe('Login function', function() {
    it('Email with one account logs in successfully', function() {
        HomePage.open();
        HomePage.login(EnvData.email, EnvData.password);
        expect(HomePage.checkLoginSuccess()).toBe(true);
    });
});