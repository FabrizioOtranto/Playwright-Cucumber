const {BeforeAll, Before, AfterAll, After} = require ('cucumber')
const { chromium } = require('playwright');
const fs = require ('fs')
var path = require('path');
const {ClassicRunner, Eyes, Target, RectangleSize} = require("@applitools/eyes-playwright")

let moonHost = '';

// Create a global browser for the test session.
BeforeAll(async() =>{
        if (moonHost){
                console.log(moonHost)
                global.browser = await chromium.connect({
                timeout: 0,
                wsEndpoint: 'ws://'+moonHost+':4444/playwright/chromium',
                headless:false
            });
        }
        else{
            console.log(moonHost)  
            global.browser = await chromium.launch({headless:false});
        }
});

AfterAll(async() => {
     await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async(scenario) =>{
    global.context = await global.browser.newContext({
         recordVideo : {
           dir : 'videos/'+scenario.pickle.name,
        }
        
    });
    global.page = await global.context.newPage();
    global.eyes = new Eyes(new ClassicRunner())
        await global.eyes.open(page, "Playwright Ecomerce with Cucumber", scenario.pickle.name, new RectangleSize(1530,730))
    
});

After(async() => {
    await global.page.close();
    //global.context.close();
        await eyes.close()
    
});
