// spec.js

class Page {

    get() {
        return browser.get('https://edit.weather.com/');
    }

    searchMyCity() {
        return browser.actions().mouseMove(by.id("topNav1"));
    }

    clickMaps() {
        return browser.findElement(by.linkText("B&N Top 100")).click();
    }

    closeAdd() {
        return browser.findElement(by.className("icon-close-modal")).click();
    }

    addBookToCart() {
        browser.findElement(by.xpath("//input[@value='PRE-ORDER']")).click();
        return browser.findElement(by.css("a.icon-close-modal")).click();
    }

    clickBookLink(number) {
        switch (number) {
            case "first": {
                return browser.findElement(by.xpath("//a[contains(text(),'An Absolutely Remarkable Thing (Signed B&N Exclusive Book)')]")).click();
                break;
            }
            case "second": {
                return browser.findElement(by.xpath("//a[contains(text(),'The Hate U Give')]")).click();
                break;
            }
            case "third" : {
                return browser.findElement(by.xpath("//a[contains(text(),'The President Is Missing')]")).click();
                break;
            }

        }

    }

    scrollToBook(number) {
        switch (number) {
            case "first": {
                break;
            }
            case "second": {
                return browser.executeScript(`window.scrollTo(100,100);`);
                break;
            }
            case "third" : {
                return browser.executeScript(`window.scrollTo(500,500);`);
                break;
            }
        }
    }

    highlightOldPriceAndPercent() {
        this.highlightWithJS(element(by.css("span.saved-percent.discount-amount")));
        return this.highlightWithJS(element(by.css("s.old-price")));
    }

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

    getNewPrice() {
        return element(by.id("pdp-cur-price")).getText();
    }
}

module.exports = Page;