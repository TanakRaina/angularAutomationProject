describe('Login Page Test Spec' , function(){

           it('should check login to be successful' , function(){
           browser.driver.manage().deleteAllCookies();
           browser.get('http://givingapp.stage-roundglass.com/login');
           element(by.id('emailInput')).sendKeys(browser.params.validEmail);
           element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
           element(by.css('.loginForm button[type="submit"]')).click().then(function(){
               browser.sleep( 2000 );
               browser.driver.wait(function(){
               return browser.driver.getCurrentUrl().then(function(url){
               return (/profile/).test(url);
               });
               expect(browser.getCurrentUrl()).toMatch('/profile');
               });
               });
               }); //it block-login

           it('should create a new campaign' ,function(){
                   browser.get('http://givingapp.stage-roundglass.com/profile');
                   element(by.css('#navbar  ul  li:nth-child(2)  a')).click();
                   element(by.css('#campaignNameInput')).sendKeys(browser.params.CampaignName);
                   element(by.css('#campaignSummaryInput')).sendKeys(browser.params.CampaignSummary);
                   element(by.css('select.form-control')).$('[value=browser.params.CampaignCategory]').click();

                   browser.sleep( 2000 );

           });//it block - new campaign

//element(by.css('.form-group')).clear().sendKeys(browser.params.CampaignLocation);
//element(by.css('.form-group  input.form-control')).clear().sendKeys(browser.params.CampaignOrg);

});//describe block