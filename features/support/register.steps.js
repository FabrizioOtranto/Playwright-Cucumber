const {Given, When, Then} = require ('cucumber');
const {RegisterPage} = require('../../page_object/register.page')

const {Target} = require("@applitools/eyes-playwright")

const registerPage = new RegisterPage();

Given('User launched eshop register page', async()=>{
    await registerPage.navigate()
 });


When('User create account with {string}, {string}, {string}, {string}, {string}, {string} and {string}', async(fname, lname, birthDay, birthMonth, birthYear, email, password) => {
    var randomNumber = Math.floor(Math.random()*10000)
    var Email = email + randomNumber + "@gmail.com" 
    await registerPage.createAccount(fname,lname,birthDay,birthMonth,birthYear,Email,password);
    await registerPage.clickRegisterBtn()
});

Then('User account should get created', async()=> {
    await registerPage.registerSuccessful();
    await eyes.check("Register succesfull message",Target.window().fully())
});


