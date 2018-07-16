'use strict';
const Page = require("../pages/page.js");

module.exports = function() {

    const page = new Page();

    this.Given(/^The main page is open$/, { timeout: 70 * 1000 }, (callback) => {
        page.get().then(callback);
    });
//
    this.When(/^I go a little down$/, { timeout: 70 * 1000 }, (callback) => {
        page.scrollDown().then(callback);
    });

    this.When(/^I see Do you know link$/, { timeout: 70 * 1000 }, (callback) => {
        page.highlightDoYouKnow().then(callback);
    });

    this.When(/^I open Deserts$/,{ timeout: 700 * 1000 }, (callback) => {
        page.openDeserts().then(callback);
    });

    this.When(/^I go to Find Recipes$/,{ timeout: 700 * 1000 }, (callback) => {
        page.pressRecipes().then(callback);
    });

    this.When(/^I go down$/, { timeout: 70 * 1000 }, (callback) => {
        page.scrollDown().then(callback);
    });

    this.When(/^I open recipe$/, { timeout: 70 * 1000 }, (callback) => {
        page.openRecipe().then(callback);
    });

    this.Then(/^I should see ingredients and recipe$/, (callback) => {
       page.highlightIngAndRec().then(callback);
    });

};
