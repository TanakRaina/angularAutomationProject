var AngularLandingPage= function(){
    browser.get('http://givingapp.stage-roundglass.com/');
}

AngularLandingPage.prototype = Object.create({},{
    heading1 : {get: function(){return element(by.css('#fundraising-app-holder > div > landing-page > div > div.section-division.lightGrayBg > div > div.headingWithBorderBtm > h1'));}}
})
module.exports = AngularLandingPage;