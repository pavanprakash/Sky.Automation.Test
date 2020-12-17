

 class HomePage  {
    //define page elements
    get dealLink() { return $("a[data-tracking-label='masthead_visit_primary_deals_link']") }
    get dealLink() { return $("//a[contains(text(),'My Account')]") }
    
        get modal() {return $('.type-modal')}
    open() {
    //    super.open('/');
        browser.url("https://www.sky.com/");
        browser.pause(5000);
    }
   
    // handleCookies() {
    //     // let modal = $('.type-modal');
        
    //     if(this.modal !== undefined){
    //         browser.$(this.modal).$("[title = 'Agree']").click()
    //     }
    //     else {
    //         console.error('Unable to find the modal')
    //     }
    //     browser.waitUntil(() => {
    //         let myAccount = $("//a[contains(text(),'My Account')]");
    //         return myAccount.isDisplayed;
    //     },20000,'Cookies werent accepted')
    // }
    
    
    clickDealLink(){
        this.dealLink.click();
    }
}
// export default new HomePage();
export const homePage = new HomePage();