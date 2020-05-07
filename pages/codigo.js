
var codigoActions = {
    setCode: function (code) {
        return this
            .waitForElementVisible('@containerCode', 7000)
            .useXpath()
            .waitForElementPresent('@activeCode',2000)
            .setValue('@activeCode', code)
            .useCss()
            .pause(15000)
    }
}

module.exports = {
    commands: [codigoActions],
    elements: {
        containerCode: '.clq-verification__code',
        securityCode: 'ul.block-container li',
        activeCode: {
            selector: '//input[@type="tel"]',
            locateStrategy: 'xpath'
        }
    }
}