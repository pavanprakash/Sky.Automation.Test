class DealsPage {

    //define page objects
    
    get offersContainer(){
        return $$('.tab-content.current div.c-offer-selection')
    }

    //page functions
    getOffer1Price(){
        return this.offersContainer[0].$('span.c-price__main').getText();
    }
    getOffer2Price(){
        return this.offersContainer[1].$('span.c-price__main').getText();
    }
    getOffer3Price(){
        return this.offersContainer[2].$('span.c-price__main').getText();
    }
}
export default new DealsPage();