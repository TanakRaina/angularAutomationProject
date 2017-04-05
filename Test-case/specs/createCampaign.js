describe('Campaign Create Spec' , function(){
           var path = require('path');
                    browser.driver.manage().window().setSize(1280, 1024);
                    browser.driver.manage().deleteAllCookies();
                    browser.get('http://givingapp-qa.stage-roundglass.com/login');
                    element(by.id('emailInput')).sendKeys(browser.params.validEmail);
                    element(by.id('passwordInput')).sendKeys(browser.params.validPwd);
                    element(by.css('.loginForm button[type="submit"]')).click().then(function(){
                    browser.sleep( 2000 );

                    return browser.driver.getCurrentUrl().then(function(url){
                    return (/profile/).test(url);
                    });
                    expect(browser.getCurrentUrl()).toMatch('/profile');
                    });

          afterEach(function(){
          browser.sleep(3000);
          });


           it('should create a campaign' , function(){

                    element(by.css('#navbar  ul  li:nth-child(3)  a')).click();
                    browser.sleep(2000);
                    element(by.css('#tabbar div div ul li:nth-child(1) a span')).getText().then(function (text) { console.log(text) });

                    element(by.id('campaignNameInput')).sendKeys(browser.params.CampaignName);
                    element(by.id('campaignSummaryInput')).sendKeys(browser.params.CampaignSummary);
                    element(by.tagName('select')).$('[value="Elderly"]').click();
                    element(by.xpath('//*[@id="fundraising-app-holder"]/div/create-campaign/div/div[2]/div/div/campaign-overview/div[2]/div/form/div/div/div[5]/div/div[1]/auto-complete-widget/div/input')).sendKeys(browser.params.CampaignLocation);
                    element(by.css('.action .btn:nth-child(1)')).click();

                    });

/*
           it('should enter campaign details' , function(){

                   element(by.css('#tabbar div div ul li:nth-child(2) a')).click().then(function(){
                   console.log('inside campaign details');
                   browser.sleep(2000);

                   var fileToUpload = '../data/pic.js';
                   var absolutePath = path.resolve(__filename, fileToUpload);
                   $('input[type="file"]').sendKeys(absolutePath);
                   browser.sleep(3000);

                   element(by.id('simple-dropdown')).click().then(function(){
                   console.log('clicked dropdown icon')
                   browser.sleep(3000);

                   element(by.css('.uploadBtn')).click()
                   browser.sleep(8000);

                   var ckEditorElement = element(by.css('.textEditorContainer'));                                                                              //expect ckEditor to be present
                   expect(ckEditorElement.isPresent()).toBe(true);

                   element(by.css('#fundraising-app-holder > div > create-campaign > div > div.action.text-center.individual > span > button')).click();
                   });
                   });

                   });

           it('should manage campaign configurations' , function(){

                    element(by.css('#tabbar div div ul li:nth-child(9) a')).click().then(function(){
                    expect(element(by.id('donationMatching')).isEnabled()).toBe(true);
                    expect(element(by.id('includeAddress')).isEnabled()).toBe(true);
                    element(by.css('.action .btn:nth-child(1)')).click();




                    element(by.id('donationMatching')).isSelected().then(function(selected) {
                        if (selected) {
                            console.log('donation matching checkbox is selected');
                            element(by.id('donationMatching')).click();
                        }

                    });

                    element(by.id('includeAddress')).isSelected().then(function(selected) {
                                            if (selected) {
                                            console.log('includeAddress checkbox is selected');
                                            element(by.id('includeAddress')).click();
                                            }
                                        });



           }); });




            it('should create a story',function(){
                             element(by.css('#tabbar div div ul li:nth-child(3) a')).click().then(function(){
                             console.log('inside story tab');

                             element(by.css('.storyPanels .panel .container .addPanel .addNewFile .btn')).click().then(function(){
                             console.log('clicked story dropdown icon')
                             browser.sleep(3000);


                             var fileToUpload = '../data/pic.js';

                             var absolutePath = path.resolve(__filename, fileToUpload);
                             $('input[type="file"]').sendKeys(absolutePath);
                             browser.sleep(2000);
                             element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > story-list-widget > div > div > div.storyPanels > div > div:nth-child(2) > div > div > form > div.col-xs-12.text-center > div > input')).click();


                             browser.sleep(3000);
                             element(by.id('storyTitleInput')).sendKeys(browser.params.storyTitle);
                             element(by.id('storyDescriptionInput')).sendKeys(browser.params.storyDescription);
                             element(by.css('.checkbox .btn-group .btn')).click();
                             browser.sleep(3000);
                             element(by.css('.row .action .btn')).click();
                             });
                             }); });

            it('should create an event',function(){
                                 element(by.css('#tabbar div div ul li:nth-child(5) a')).click().then(function(){
                                 console.log('inside events tab');

                                 element(by.css('.outerPanel .container .addPanel .addNewFile .btn')).click().then(function(){
                                 console.log('clicked event dropdown icon')
                                 browser.sleep(3000);

                                 element(by.id('eventTitleInput')).sendKeys(browser.params.eventTitleInput);
                                 element(by.id('eventDescriptionInput')).sendKeys(browser.params.eventDescriptionInput);
                                 element(by.id('eventVenueInput')).sendKeys(browser.params.eventVenueInput);
                                 element(by.id('eventVenueAddressInput')).sendKeys(browser.params.eventVenueAddressInput);
                                 element(by.id('eventVenueInput')).sendKeys(browser.params.eventVenueInput);

                                 browser.sleep(3000);
                                 element(by.css('.container .action .btn:nth-child(1)')).click();
                                 });
                                 }); });


           it('should add a sponsor to campaign ',function(){
                    element(by.css('#tabbar div div ul li:nth-child(6) a')).click().then(function(){
                    console.log('inside sponsors tab');

                    element(by.css('.containerPanel .container .addPanel .addNewFile .btn')).click().then(function(){
                    console.log('clicked sponsor dropdown icon')
                    browser.sleep(3000);

                    element(by.id('sponsorNameInput')).sendKeys(browser.params.sponsorNameInput);

                    var fileToUpload = '../data/pic.js';

                    var absolutePath = path.resolve(__filename, fileToUpload);
                    $('input[type="file"]').sendKeys(absolutePath);
                    browser.sleep(2000);
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > sponsor-list-widget > div > div > div > div:nth-child(2) > div > div.container.form.text-left > div.row > div > div:nth-child(1) > div > div.col-sm-4.col-xs-12 > div > input')).click();
                    browser.sleep(2000);
                    browser.findElement(protractor.by.css('select option:nth-child(2)')).click();

                    browser.sleep(3000);
                    element(by.css('.container .action .btn:nth-child(1)')).click();
                    });
                    }); });
*/



           it('should create a chapter' , function(){
                               element(by.css('#tabbar div div ul li:nth-child(4) a')).click().then(function(){
                               browser.sleep(6000);
                               element(by.css('.container-fluid .tab-content .tab-pane div div .outerPanel div div div .container .addPanel .addNewFile .btn')).click().then(function(){

                               browser.sleep(3000);
                               console.log('clicked add button');

                               element(by.id('chapterTitleInput')).sendKeys(browser.params.chapterTitleInput);
                               element(by.id('chapterSummaryInput')).sendKeys(browser.params.chapterSummaryInput);
                               browser.sleep(2000);
                               element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.action.text-center > button')).click();

                               }); });
                      });//it block-create chapter

});//describe block