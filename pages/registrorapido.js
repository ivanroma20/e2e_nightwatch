
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
    url: '/user/register',
    commands: [registerActions],
    elements: {
        form: '.clq-register',
        quienSelect: '[aria-owns="list-16"]',
        comercioItem: {
            selector: '//div[contains(text(),"Comercio")]',
            locateStrategy: 'xpath'
        },
        desarrolloItem: '#list-item-56-1',
        nameInput: '#input-21',
        emailInput: '#input-24',
        passInput: '#input-29',
        eyeNoShow: '.mdi-eye',
        eyeShow: '.mdi-eye-off',
        medioSelect: '.v-select__selections',
        medioItemList: '.v-list-item__content',
        acceptCheck: '#input-45',
        registerButton: '.v-btn',
        alertPassInvalid: '.clq-notification--error',
    }
}