import {Given, When, Then} from 'cucumber';
// const assert = require('chai').assert;

import {homePage} from '..//PageObjects/homePage';


Given("I am on the {string} page", (page) => {
    // browser.url('https://www.sky.com/')
    homePage.open();  
    // homePage.handleCookies();
    $(".type-modal [title = 'Agree']").click();
    browser.pause(5000)
})

When("I navigate to {string}", (page) => {
    homePage.clickDealLink();
})

Then("the user should be on the {string} page",(page) => {

})