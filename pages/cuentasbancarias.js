
var cuentaActions = {
    createAccount: function (account) {
        return this
            .waitForElementVisible('@containerAccount', 5000)
            .click('@inputBank')
            .waitForElementVisible('@itembank1', 3000)
            .click('@itembank1')
            .pause(1000)
            .click('@inputAccount')
            .pause(1000)
            .click('@itemAccount1')
            .setValue('@accountNumber', account)
            .click('@buttonNext')
    }
}

module.exports = {
    commands: [cuentaActions],
    elements: {
        containerAccount: '.clq-bank__account-group',
        inputBank: '[aria-owns="list-178"]',
        itembank1: '#list-item-217-0',
        itembank2: '#list-item-217-1',
        itembank3: '#list-item-217-2',
        itembank4: '#list-item-217-3',
        itembank5: '#list-item-217-4',
        //itembankList: '.v-list-item__title',
        inputAccount: '[aria-owns="list-183"]',
        itemAccount1: '#list-item-226-0',
        itemAccount2: '#list-item-226-1',
        accountNumber: '#input-188',
        buttonNext: '.v-btn__content'

    }
}