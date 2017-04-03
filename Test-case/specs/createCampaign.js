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


           it('should create a campaign' , function(){

                    element(by.css('#navbar  ul  li:nth-child(3)  a')).click();
                    browser.sleep(2000);
                    element(by.css('#tabbar div div ul li:nth-child(1) a span')).getText().then(function (text) { console.log(text) });

                    element(by.id('campaignNameInput')).sendKeys(browser.params.CampaignName);
                    element(by.id('campaignSummaryInput')).sendKeys(browser.params.CampaignSummary);
                    element(by.tagName('select')).$('[value="Elderly"]').click();
                    element(by.xpath('//*[@id="fundraising-app-holder"]/div/create-campaign/div/div[2]/div/div/campaign-overview/div[2]/div/form/div/div/div[5]/div/div[1]/auto-complete-widget/div/input')).sendKeys(browser.params.CampaignLocation);
                    element(by.css('.action .btn:nth-child(1)')).click();
                    browser.sleep(3000);
                    });

           it('should create a chapter' , function(){
                    element(by.css('#navbar  ul  li:nth-child(4)  a')).click();
                    browser.sleep(1000);
                    element(by.css('.container .addPanel .addNewFile .btn')).click();
                    browser.sleep(1000);
                    element(by.id('chapterTitleInput')).sendKeys(browser.params.chapterTitleInput);
                    element(by.id('chapterTitleInput')).sendKeys(browser.params.chapterSummaryInput);
                    element(by.css('#fundraising-app-holder > div > create-campaign > div > div.container-fluid.customTabContent.campaignDetail.createCampaign > div > div > manage-chapter-widget > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div.container-fluid > div > div.action.text-center > button')).click();


           });//it block-create chapter



  /*

           it('should enter campaign details' , function(){

                    element(by.css('#tabbar div div ul li:nth-child(2) a')).click().then(function(){
                    console.log('inside campaign details');
                    browser.sleep(3000);
                    element(by.id('simple-dropdown')).click().then(function(){
                    console.log('clicked dropdown icon')
                    browser.sleep(3000);
                    element(by.css('.uploadBtn')).click().then(function () {

                    browser.sleep(2000);
                    var fileToUpload = '../data/pic.js';
                    var absolutePath = path.resolve(__filename, fileToUpload);
                    $('input[type="file"]').sendKeys(absolutePath);
                    browser.sleep(4000);

                    element(by.css('.action span .btn span)).click();
                    });
                    });
                    });

           });


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
                  }); })



*/

});//describe block