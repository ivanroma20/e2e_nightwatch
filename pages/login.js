
var loginActions = {
    with: function (email, pass) {
        return this
            .navigate()
            .waitForElementVisible('@form', 10000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .click('@loginButton')
    },
    expectAlertDanger: function (texto) {
        return this
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', texto)
    },
    expectAlertInfo: function (texto, position) {
        return this
            .waitForElementVisible(`@alertInfo:nth-child(${position})`, 10000)
            .assert.containsText(`@alertInfo:nth-child(${position})`, texto)
    },
    expectAlertPass: function (texto) {
        return this
            .useXpath()
            .waitForElementVisible('@alertPass', 10000)
            .assert.containsText('@alertPass', texto)
            .useCss()
    }
}

module.exports = {
    url: '/',
    commands: [loginActions],
    elements: {
        form: '.login-tabs-container',
        emailInput: 'input[name=email]',
        passInput: 'input[name=password]',
        loginButton: '#button-with-loading',
        alertDanger: '.vs-alert',
        alertInfo: '.span-text-validation',
        alertPass: {
            selector: '//span[contains(text(),"Contraseña inválida")]',
            locateStrategy: 'xpath'
        }
    }
}