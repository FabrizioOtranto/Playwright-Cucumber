const { expect } = require("chai");

class RegisterPage {



    async navigate() {
        await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    }

    async createAccount(fname,lname,day,month,year,email,password){
        await page.fill('#FirstName', fname);
        await page.fill('#LastName', lname);
        await page.fill('#Email', email);
        const birthdays = await page.$("select[name='DateOfBirthDay']")
        await birthdays.selectOption({label: day})
        const birthmonths = await page.$("select[name='DateOfBirthMonth']")
        await birthmonths.selectOption({label: month})
        const birthYear = await page.$("select[name='DateOfBirthYear']")
        await birthYear.selectOption({label: year})
        await page.fill('#Password', password);
        await page.fill('#ConfirmPassword', password);
        
        
    }

    async clickRegisterBtn(){
        await page.click('#register-button')
    }
    async registerSuccessful(){ 
        const message = await page.$('.result');
        expect (message).to.not.be.null;
    }
  }
  module.exports = { RegisterPage };