
var activacionActions = {
    acceptTerms: function (code) {
        return this
            .waitForElementVisible('@containerTerms', 7000)
            .click('@checkTerms')
            .pause('1000')
            .click('@buttonNext')
    }
}

module.exports = {
    commands: [activacionActions],
    elements: {
        containerTerms: '.clq-terms__body',
        checkTerms: '#input-234',
        buttonNext: '.v-btn__content'

    }
}