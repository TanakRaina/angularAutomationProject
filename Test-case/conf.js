exports.config={
    directConnect: true,
    params: require('./data/login_details.json'),
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub' ,
    specs:['specs/Donate_using_search.js'],
    jasmineNodeOpts: {defaultTimeoutInterval: 100000},
    allScriptsTimeout: 22000

    }
