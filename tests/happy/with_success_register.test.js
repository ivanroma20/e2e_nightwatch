module.exports = {
    '@tags': ['culqi'],

    'Registro con éxito HappyPath': (browser) => {
        let register = browser.page.register()

        register
            .with('Andres lopez', 'andreslopez0@gmail.com', 'Aa06137926%', 0)
    }
}