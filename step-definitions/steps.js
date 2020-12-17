import {Given, When, Then} from 'cucumber';
const assert = require('chai').assert;

import homePage from '..//PageObjects/homePage';
import signInPage from '../PageObjects/signInPage';
import dealsPage from '../PageObjects/dealsPage';

Given("I am on the {string} page", (page) => {
    let url;
    if(page === 'home'){
        url = "https://www.sky.com/";
    }
    else{
        url = page;
    }
    browser.url(url);
    browser.maximizeWindow();

    homePage.handleCookies();

})
When("I navigate to Deals", () => {

    homePage.clickDealLink();
})
Then("the user should be on the {string} page", (pageUrl) => {
    browser.pause(2000);
    let url = browser.getUrl();
    assert.equal(url, pageUrl);
})
When("I try to sign in with invalid credentials", () => {
    homePage.clickOnSignIn();
    signInPage.email.setValue('test@test.com');
    signInPage.password.setValue('test123');
    signInPage.signInBtn.click();
})
Then("I should see a text saying that {string}", (expectedMsg) => {
    let text = signInPage.getLoginErrorTxt();
    assert.equal(text,expectedMsg);
})
Then("I see a list of offers with a price to it", () => {
    let offersPriceList = ['£39','£27','£46'];
    
    //compare first offer price
    assert.equal(dealsPage.getOffer1Price(),offersPriceList[0]);

    //compare first offer price
     assert.equal(dealsPage.getOffer2Price(),offersPriceList[1]);

    //compare first offer price
    assert.equal(dealsPage.getOffer3Price(),offersPriceList[2]);
    
})
When("I search {string} in the search bar", (item) => {
    homePage.searchIcon.click();
    homePage.searchBox.setValue(item);
    
})
Then("I should see an editorial section", () => {
    assert.isTrue(homePage.checkEditorialSection());
})
