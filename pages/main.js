
var mainActions = {
 
}

module.exports = {
    commands: [mainActions],
    elements: {
        registerLink: 'a[href="/user/register"]',
        onlineLink: {
            selector: '//h3[contains(text(),"CULQI ONLINE")]',
            locateStrategy: 'xpath'
        },
        posLink: {
            selector: '//h3[contains(text(),"CULQI POS")]',
            locateStrategy: 'xpath'
        }
    }
}