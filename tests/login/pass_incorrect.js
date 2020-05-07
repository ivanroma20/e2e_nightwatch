

module.exports = {
    '@tags': ['admin'],
    'pass incorrect': (browser) => {
        let login = browser.page.login()
        login
            .with('admin@gmail.com', '123456789Aa#')
            .expectAlertDanger('Usuario y/o password incorrecto')
    }
}

