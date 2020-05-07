

module.exports = {
    '@tags': ['admin'],
    'email not registred': (browser) => {
        let login = browser.page.login()
        login
            .with('ivanbeto20@gmail.com', 'pass123')
            .expectAlertDanger('Usuario y/o password incorrecto')
    }
}

