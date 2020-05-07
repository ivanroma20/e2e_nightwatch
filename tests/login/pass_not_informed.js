

module.exports = {
    'tags' : ['admin'],
    'pass not informed': (browser) => {
        let login = browser.page.login()
        login
            .with('admin@gmail.com', '')
            .expectAlertPass('Contraseña inválida')
    }
}

