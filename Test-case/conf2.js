exports.config={
    directConnect: true,
    params: require('./data/login_details.json'),

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub' ,
    specs:['specs/test-page-object2.js'],
    jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000}



    }