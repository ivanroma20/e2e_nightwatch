
var comercioActions = {
    createMerchant: function (name,document,phone,web) {
        return this
            .waitForElementVisible('@containerMerchant', 2000)
            .useXpath()
            .setValue('@merchantName', name)
            .pause(1000)
            .click('@typeDocument')
            .pause(1000)
            .click('@ruc')
            .useCss()
            .setValue('@numberDocument', document)
            .click('@inputCategory')
            .click('@groupCategory')
            .pause(2000)
            .click('@itemCategory')
            .setValue('@phoneNumber',phone)
            .setValue('@linkWeb',web)
            .pause(1000)
            .waitForElementVisible('@buttonNext', 4000)
            .click('@buttonNext')
    },
    expectAlertInfo: function (texto, position) {
        return this
            .waitForElementVisible(`@alertInfo:nth-child(${position})`, 10000)
            .assert.containsText(`@alertInfo:nth-child(${position})`, texto)
    }
}

module.exports = {
    commands: [comercioActions],
    elements: {
        containerMerchant: '.clq-merchant-container',
        //merchantName: '#input-80',
        merchantName: {
            selector: '//form[1]/div[2]/div[1]/div[1]/div[1]/input[1]',
            locateStrategy: 'xpath'
        },
        //typeDocument: '[aria-owns="list-83"]',
        typeDocument: {
            selector: '//form[1]/div[3]/div[1]/div[1]/div[1]/div[1]',
            locateStrategy: 'xpath'
        },
        idDni: '#list-item-153-0',
        idRuc: '#list-item-153-1',
        idCe:  '#list-item-153-2',
        dni: {
            selector: '//div[contains(text(),"DNI")]',
            locateStrategy: 'xpath'
        },
        ruc: {
            selector: '//div[contains(text(),"RUC")]',
            locateStrategy: 'xpath'
        },
        ce: {
            selector: '//div[contains(text(),"Carné de extranjería")]',
            locateStrategy: 'xpath'
        },
        numberDocument: '#input-88',
        inputCategory: '#qCascada-input',
        groupCategory: '#qCascada-group',
        itemCategory: '#qCascada-item',
        phoneNumber: '#input-102',
        linkWeb: '#input-106',
        buttonNext: '.v-btn__content'

    }
}