const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const Page = require("../pages/page.js");

module.exports = function() {

    const page = new Page();

    this.Given(/^The main page is open$/, { timeout: 700 * 1000 }, (callback) => {
        page.get().then(callback);
    });

    this.When(/^I see my location$/, { timeout: 700 * 1000 }, (callback) => {
        page.highlightLocation().then(callback);
    });

    this.When(/^I click on maps link$/, { timeout: 700 * 1000 }, () => {
        page.clickOnMaps();
    });

    // this.When(/^I push on Weather in Motion link$/,{ timeout: 700 * 1000 }, () => {
    //     page.pushOnWeather();
    // });
    // this.When(/^I press pause$/,{ timeout: 700 * 1000 }, () => {
    //     page.pressPause();
    // });

    this.Then(/^I should see map$/, () => {
       browser.sleep(20000);
    });

};
