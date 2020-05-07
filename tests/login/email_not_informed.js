

module.exports = {
    '@tags': ['admin'],
    'email not informed': (browser) => {
        let login = browser.page.login()
        login
            .with('', 'pass123')
            .expectAlertInfo('Email inválido', 1)
    }
}

