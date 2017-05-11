var AngularLandingPage = require('../pageObject/landingPage-po.js');

describe('RgFundraiser Landing Page',function(){
    var landingPage= new AngularLandingPage();


    it('should verify Heading content',function(){
   
    expect(landingPage.banner.isPresent()).toBe(true);
    browser.sleep(2000);
    });

  
});

 //expect(landingPage.heading1).toMatch('featured campaigns');

  