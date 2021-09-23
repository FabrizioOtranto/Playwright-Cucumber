const {Given, When, Then} = require ('cucumber');
const {LoginPage} = require('../../page_object/login.page')
const {Target} = require("@applitools/eyes-playwright")

const loginPage = new LoginPage();

Given('User launched eshop login page', async()=>{
    await loginPage.navigate()
 });

 //valid credentials
When('User login with valid {string} and {string}', async(email, password) => {
    await loginPage.Login(email,password)
    await eyes.check("login valid credentials step",Target.window().fully())
    await loginPage.clickLoginBtn()
});

Then('User should login and be redirected to home page', async()=> {
    await loginPage.loginSuccessful()
    await eyes.check("login valid credentials home page",Target.window().fully())
    
});

//invalid Email
When('User login with invalid {string} and valid {string}', async(email,password) => {
    await loginPage.Login(email,password)
    await loginPage.clickLoginBtn()
});

When('User login with valid {string} and invalid {string}', async(email,password) => {
    await loginPage.Login(email,password)
    await loginPage.clickLoginBtn()
});

Then('User should see an error {string}', async(message)=> {
        await loginPage.loginUnsuccessfulMessage(message)
        await eyes.check("login unsuccessful invalid message",Target.window().fully())
});


