var testData = require('../data/login_details.json');

describe('Login Page Test Spec' , function(){

       beforeEach(function(){
           browser.driver.manage().deleteAllCookies();

           browser.get('http://givingapp.stage-roundglass.com/login');
           }) //beforeEach block


       testData.forEach(function(data){
           it('should check login to be successful' , function(){
           element(by.id('emailInput')).sendKeys(data.validCredentials.validEmail);
           element(by.id('passwordInput')).sendKeys(data.validCredentials.validPwd);
           element(by.css('.loginForm button[type="submit"]')).click().then(function(){
                                       browser.sleep( 2000 );
                                       browser.driver.wait(function(){
                                       return browser.driver.getCurrentUrl().then(function(url){
                                       return (/profile/).test(url);
                                       });
                                       expect(browser.getCurrentUrl()).toMatch('/profile');});});



           });
           });
       });