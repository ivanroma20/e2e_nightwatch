
var registerActions = {
    with: function (name, email, pass, medio) {
        return this
            .navigate()
            // .waitForElementVisible('@form', 10000)
            // .click('@quienSelect')
            // .waitForElementVisible('@comercioItem', 10000)
            // .click('@comercioItem')
            // .setValue('@nameInput', name)
            // .setValue('@emailInput', email)
            // .setValue('@passInput', pass)
            // .pause(1000)
            // .click('@medioSelect')
            // .pause(1000)
            // .click({ selector: '@medioItemList', index: medio })
            // .click('@acceptCheck')
            // .click('@registerButton')
            //.pause(20000)
    }
}

module.exports = {
    url: 'http://culqi3-qa-onboarding.s3-website-us-east-1.amazonaws.com/user/register',
    commands: [registerActions],
    elements: {
        form: '.clq-register',
        quienSelect: '[aria-owns="list-16"]',
        comercioItem: '#comercio-list-item-56',
        desarrolloItem: '#desarrollador-list-item-56',
        nameInput: '#input-23',
        emailInput: '#input-26',
        passInput: '#input-31',
        eyeNoShow: '.mdi-eye',
        eyeShow: '.mdi-eye-off',
        medioSelect: '[aria-owns="list-42"]',
        medioItemList: '.parentItemEnterasteCulqi',
        acceptCheck: '#input-49',
        registerButton: '.v-btn',
        alertPassInvalid: '.clq-notification--error',
    }
}