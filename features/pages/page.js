'use strict';
class Page {

    get() {
       return browser.get('https://rupsinthekitchen.com');
    }

    scrollDown() {
        return browser.executeScript('window.scrollTo(300, 100)');
    }

    highlightDoYouKnow() {
        return browser.highlightWithJS(element(by.xpath("//section[@id='one']/div/div/div/div/header/h2")));
    }

    openDeserts(){
        return browser.findElement(element(by.css("(//button[@type='button'])[3]"))).click().then(function () {
            return browser.findElement(element(by.css("//a[contains(text(),'Dessert')]")));
    })}

    pressRecipes(){
        return browser.findElement(element(by.css("a.button"))).click();
    }

    openRecipe(){
        return browser.findElement(element(by.xpath("//div[@id='page-wrapper']/list/div/div/div[2]/div/div/div[5]/a/h3"))).click();
    }

    highlightIngAndRec(){
        return browser.highlightWithJS(element(by.css("div.col-md-12.detail-image"))).then(function () {
        return browser.highlightWithJS(element(by.xpath("//div[@id='page-wrapper']/detail/div/div/div/div/div/div/div[2]")));
        })}

    highlightWithJS(el) {
        var bg;
        return el.getCssValue("backgroundColor").then(function (col) {
            bg = col;
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
        }).then(function () {
            return browser.sleep(1000);
        }).then(function () {
            console.log('bg', bg);
            return browser.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
        }).then(function () {
            return browser.sleep(1000);
        })
    }
}

module.exports = Page;