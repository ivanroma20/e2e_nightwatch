
var registerActions = {
    with: function (name, email, pass, medio) {
        return this
            .navigate()
            .waitForElementVisible('@form', 10000)
            .click('@quienSelect')
            .useXpath()
            .waitForElementVisible('@comercioItem', 10000)
            .click('@comercioItem')
            .useCss()
            .setValue('@nameInput', name)
            .setValue('@emailInput', email)
            .setValue('@passInput',pass)
            .pause(1000)
            .click({selector:'@medioSelect', index:1})
            .pause(2000)
            .click({selector:'@medioItemList', index:medio})
            .click('@acceptCheck')
            .click('@registerButton')
    }
}

module.exports = {
    url: '/online',
    commands: [registerActions],
    elements: {
        form: '.clq-register',
        quienSelect: '[aria-owns="list-20"]',
        comercioItem: {
            selector: '//div[contains(text(),"Comercio")]',
            locateStrategy: 'xpath'
        },
        desarrolloItem: '#list-item-60-1',
        nameInput: '#input-25',
        emailInput: '#input-28',
        passInput: '#input-33',
        eyeNoShow: '.mdi-eye',
        eyeShow: '.mdi-eye-off',
        medioSelect: '.v-select__selections',
        medioItemList: '.v-list-item__content',
        acceptCheck: '#input-49',
        registerButton: '.v-btn',
        alertPassInvalid: '.clq-notification--error',
    }
}