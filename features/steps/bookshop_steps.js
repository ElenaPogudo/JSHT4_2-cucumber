const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const Page = require("../pages/page.js");

module.exports = function() {

    const page = new Page();

    this.Given(/^The main page is open$/, { timeout: 70 * 1000 }, (callback) => {
        page.get().then(callback);
    });

    this.Given(/^Stupid add is close$/, { timeout: 70 * 1000 }, (callback) => {
        page.closeAdd().then(callback);
    });

    this.When(/^I move to books link$/, { timeout: 70 * 1000 }, (callback) => {
        page.goToBooksLink().then(callback);
    });

    this.When(/^I click on top 100 link$/, { timeout: 30 * 1000 }, (callback) => {
        page.clickTop100Link().then(callback);
    });

    this.When(/^I scroll down to "([^"]*)" book$/, (bookNumber) => {
        page.scrollToBook(bookNumber);
    });

    this.When(/^I open book link$/, (bookNumber, callback) => {
        page.clickBookLink(bookNumber).then(callback);
    });

    this.When(/^I add book to my shopping cart$/, (callback) => {
        page.addBookToCart().then(callback);
    })

    this.When(/^I should see old prices and % I save$/, (callback) => {
        page.highlightOldPriceAndPercent().then(callback);
    });

    this.Then(/^I should see that the price is "([^"]*)"$/, (expectedPrice, callback) => {
        page.getNewPrice().then((text) => {
            expect(text).to.eql(expectedPrice);
        }).then(callback);
    });

};
