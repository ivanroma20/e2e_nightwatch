
var finalActions = {
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
    commands: [finalActions],
    elements: {
        containerTerms: '.clq-terms__body',
        textFinal: {
            selector: '//p',
            locateStrategy: 'xpath'
        }    

    }
}