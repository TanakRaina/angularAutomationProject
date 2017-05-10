//donation for campaign with stripe and no billing address is successful
//donation for campaign with stripe and billing address is successful
//donation for campaign with units based donation -incomplete
//donation for campaign with donation in payu - incomplete

describe('Check donation using search for campaign' , function(){
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

   it('should check donation to be successful' , function(){



            element(by.css('#navbar > ul.nav.navbar-nav.navbar-right.right-menu > li.customSearch > auto-complete-widget > div > input')).click()
           // 'browser.params.Donation_Campaign_stripe'
            element(by.css('#navbar > ul > li.customSearch > auto-complete-widget > div > input')).sendKeys('Ferns And Petals').then(function(){
            element(by.css('#navbar > ul > li.customSearch > auto-complete-widget > div > div > div > li > div > div:nth-child(2)')).click();
            });
            browser.sleep(2000);
            element(by.css('#fundraising-app-holder > div > cause-detail > div > div:nth-child(1) > div > div.campaignPriceDetail.padding-top50 > div.navbar.navbar-default.customMenuBtn > div > span > a.btn.btn-primary')).click()
            console.log("entered donate block");
            // element(by.css('.donationAmounte')).clear().sendKeys(browser.params.Donation_Amount);

            element(by.name('tip')).isPresent().then(function(present){
                                    if(present == true){
                                    browser.findElement(protractor.by.css('select option:nth-child(2)')).click();
                                    }
                                    else{
                                    browser.sleep(100)}
                                    });


            browser.sleep(2000);
            element(by.id('firstNameInput')).clear().sendKeys(browser.params.Donor_FirstName);
            element(by.id('lastNameInput')).clear().sendKeys(browser.params.Donor_LastName);

            element(by.id('cardNumberInput')).isPresent().then(function(present){
                                    if(present == true){
                                    element(by.id('cardNumberInput')).sendKeys(browser.params.Donor_CardNo);
                                    }
                                    else{
                                    browser.sleep(100)}
                                    });
            element(by.id('securityCodeInput')).isPresent().then(function(present){
                                    if(present == true){
                                    element(by.id('securityCodeInput')).sendKeys(browser.params.Donor_SecurityCode);
                                    }
                                    else{
                                    browser.sleep(100)}
                                    });
            element(by.id('expiryDateInput')).isPresent().then(function(present){
                                    if(present == true){
                                    element(by.id('expiryDateInput')).sendKeys(browser.params.Donor_ExpiryDate);
                                    }
                                    else{
                                    browser.sleep(100)}
                                    });
            element(by.id('phoneInput')).isPresent().then(function(present){
                                    if(present == true){
                                    element(by.id('phoneInput')).sendKeys(browser.params.Donor_phno);
                                    }
                                    else{
                                    browser.sleep(100)}
                                    });

            element(by.tagName('billing-address-form')).isPresent().then(function(present){

            if(present == true){
            console.log('billing adress form is present')
            element(by.css('billing-address-form form div.form-group div input')).sendKeys(browser.params.Donor_Addr_street);

            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(1) > div')).click().then(function(){
            element(by.css('select option:nth-child(5)')).click();

            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div')).click().then(function(){
            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div:nth-child(6) > billing-address-form > form > div:nth-child(2) > div:nth-child(2) > div > div > input')).sendKeys('stateabc');})
            });
            browser.sleep(1000);


            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(1) div div input')).sendKeys(browser.params.Donor_Addr_city);
            element(by.css('billing-address-form form div:nth-child(3) div:nth-child(2) div div input')).sendKeys(browser.params.Donor_Addr_pincode);
            }

            else{browser.sleep(1000);}
});//billing form

            element(by.css('#modalId > div > div > div:nth-child(2) > div > donate-modal > div > div.container.form > div > div > div > div > credit-card-payment > form > div.form-group.text-left.donationCheckbox > div > div > label')).click();
            browser.sleep(1000);
            element(by.css('.action .btn')).click();
            browser.sleep(2000);

});//it spec

            it('should check logout to be successful',function(){
            element(by.css('#desktopMenu ul li a')).click();
            element(by.css('#userMenu li.text-center a')).click();
            browser.sleep(2000);

            }); // it block-successful logout

});//describe block