describe('Test Spec' , function(){

   it('should check donation to be successful' , function(){
            browser.driver.manage().window().maximize();
            browser.driver.manage().deleteAllCookies();
            browser.get('http://givingapp-qa.stage-roundglass.com/login');
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

            element(by.css('#navbar ul li:nth-child(1) a')).click();
            browser.sleep(2000);

            element(by.css('#searchbar > ul > li > div > div > auto-complete-widget > div > input')).sendKeys(browser.params.DonationCampaign).then(function(){
            element(by.css('#searchbar > ul > li > div > div > auto-complete-widget > div > div > div > div > li > div > div:nth-child(2) > li > a')).click();
            });
            browser.sleep(5000);
            element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-primary'))
            .click().then(function(){
            console.log("entered donate block")
            element(by.css('.donateAmountSection div div input')).clear().sendKeys(browser.params.DonationAmount);
            browser.findElement(protractor.by.css('select option:nth-child(1)')).click();
            browser.sleep(2000);
            element(by.id('firstNameInput')).clear().sendKeys(browser.params.DonorFirstName);
            element(by.id('lastNameInput')).clear().sendKeys(browser.params.DonorLastName);
            element(by.id('cardNumberInput')).sendKeys(browser.params.DonateCardNo);
            element(by.id('securityCodeInput')).sendKeys(browser.params.DonateSecurityCode);
            element(by.id('expiryDateInput')).sendKeys(browser.params.DonateExpiryDate);
            element(by.xpath('//*[@id="modalId"]/div/div/div[2]/div/donate-modal/div/div[7]/div/div/div/div/credit-card-payment/form/div[6]/billing-address-form/form/div[1]/div/input')).isPresent().then(function(present){
                                                        if(present == true){
                                                        element(by.xpath('//*[@id="modalId"]/div/div/div[2]/div/donate-modal/div/div[7]/div/div/div/div/credit-card-payment/form/div[6]/billing-address-form/form/div[1]/div/input')).sendKeys('sector 67');}


                                                        else{
                                                        browser.sleep(100)}    });

            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select')).isPresent().then(function(present){
                                                                    if(present == true){
                                                                    element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select')).element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select > option:nth-child(104)')).click();
                                                                    }
                                                                    else{
                                                                    browser.sleep(100)}    });


            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select')).isPresent().then(function(present){
                                                                                if(present == true){
                                                                                element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select')).element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select > option:nth-child(21)')).click();
                                                                                }
                                                                                else{
                                                                                browser.sleep(100)}    });
            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).isPresent().then(function(present){
                                                                                             if(present == true){
                                                                                             element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).sendKeys('Mohali'); }
                                                                                             else{
                                                                                             browser.sleep(100)}    });
            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).isPresent().then(function(present){
                                                                                             if(present == true){
                                                                                             element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).sendKeys('176061'); }
                                                                                             else{
                                                                                             browser.sleep(100)}    });


            //element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select')).element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div > div > select > option:nth-child(104)')).click();
            //element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select')).element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > select > option:nth-child(21)')).click();
            //element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).sendKeys('Mohali');
            //element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).sendKeys('176061');
            browser.sleep(1000);
            element(by.css('div.action button')).click();
            browser.sleep(3000);
            });







});

});//describe block