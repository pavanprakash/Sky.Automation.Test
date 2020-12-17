class HomePage {
    // define page elements

    get dealLink() {
        return $("//a[contains(text(),'Deals')]")
    }
    get signInLnk() {
        return $("a[data-test-id = 'sign-in-link']")
    }
    get searchIcon() {
        return $('.search-toggle__icon');
    }
    get searchBox(){
        return $("input[data-test-id = 'input-box']");
    }
    get searchContainer() {
        return $("#search-results-container");
    }
    get editorialSection() {
        return $("div[data-test-id = 'editorial-section']");
    }
    
    //define page functions/actions
    handleCookies() {
        let iframe = $('#sp_message_iframe_207015');

        if (iframe !== undefined) {
            //switch to frame
            browser.switchToFrame(iframe);
            $("//button[contains(text(),'Agree')]").click()
            browser.pause(2000);
            browser.switchToParentFrame();
        } 
        browser.waitUntil(() => {
            let myAccount = $("//a[contains(text(),'Deals')]");
            return myAccount.isDisplayed;
        }, 20000, 'Cookies werent accepted')
    }


    clickDealLink() {
        this.dealLink.click();

    }
    clickOnSignIn() {
        this.signInLnk.click();
    }
    checkEditorialSection(){
        let displayed;
        browser.waitUntil(() => {
            displayed = this.editorialSection.isDisplayed()
            return displayed;
        },5000,'Unable to see search Container!');
        return displayed;
    }
}
export default new HomePage();
