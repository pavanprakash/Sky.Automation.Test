import homePage from '../PageObjects/HomePage'
// const homePage = require('../PageObjects/HomePage');
const openHomePage = () => {
    homePage.open();

}

const navigateToDeal = () => {
    homePage.clickDealLink();
}

module.exports = {openHomePage,navigateToDeal}