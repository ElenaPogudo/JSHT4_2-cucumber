class Page {

    get() {
        return browser.get('https://edit.weather.com/');
    }

    clickOnMaps() {
        return browser.findElement(by.xpath("//div[@id='mini-panel-header_drilldown_mini_panel']/div/div/div/div/ul/li[2]/a/span")).click();
    }

    // pushOnWeather() {
    //     return browser.findElement(by.linkText("Weather in Motion®")).click();
    // }

    // pressPause() {
    //     return browser.findElement(by.xpath("//div[@id='wx-main']/container-map/div/div/section/p-map/p-map-animation-timeline/animation-controls/button")).click();
    // }

    // clickBookLink(number) {
    //     switch (number) {
    //         case "first": {
    //             return browser.findElement(by.xpath("//a[contains(text(),'An Absolutely Remarkable Thing (Signed B&N Exclusive Book)')]")).click();
    //             break;
    //         }
    //         case "second": {
    //             return browser.findElement(by.xpath("//a[contains(text(),'The Hate U Give')]")).click();
    //             break;
    //         }
    //         case "third" : {
    //             return browser.findElement(by.xpath("//a[contains(text(),'The President Is Missing')]")).click();
    //             break;
    //         }
    //
    //     }
    //
    // }
    //
    // scrollToBook(number) {
    //     switch (number) {
    //         case "first": {
    //             break;
    //         }
    //         case "second": {
    //             return browser.executeScript(`window.scrollTo(100,100);`);
    //             break;
    //         }
    //         case "third" : {
    //             return browser.executeScript(`window.scrollTo(500,500);`);
    //             break;
    //         }
    //     }
    // }

    highlightLocation() {
        return this.highlightWithJS(element(by.css("span.location-text.not-truncated")));
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
}

module.exports = Page;