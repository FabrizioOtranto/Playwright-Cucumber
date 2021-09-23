const { expect } = require("chai");

class LoginPage {



    async navigate() {
        await page.goto('https://demo.nopcommerce.com/login');
    }

    async Login(email,password){
        await page.fill('#Email', email);
        await page.fill('#Password', password);
    }

    async clickLoginBtn(){
        await page.click('.login-button')
    }
    async loginSuccessful(){ 
        const message = await page.$('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div > div.topic-block > div.topic-block-title > h2');
        expect (message).to.not.be.null;
    }

    async loginUnsuccessfulMessage(message){
        const content = await page.textContent('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.message-error.validation-summary-errors > ul > li');
        expect(content).to.equals(message);
    }
  }
  module.exports = { LoginPage };