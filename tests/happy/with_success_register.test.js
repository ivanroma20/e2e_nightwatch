module.exports = {
    '@tags': ['culqi'],

    'Registro con éxito HappyPath Redes': (browser) => {
        let register = browser.page.register()

        register
            .with('Andres lopez', 'andreslopez0@gmail.com', 'Aa06137926%',0)

    },

    'Registro con éxito HappyPath Prensa': (browser) => {
        let register = browser.page.register()

        register
            .with('Andres lopezs', 'andreslopez1@gmail.com', 'Aa06137926%',1)

    },

    'Registro con éxito HappyPath Google': (browser) => {
        let register = browser.page.register()

        register
            .with('Andres lopezss', 'andreslopez2@gmail.com', 'Aa06137926%',2)

    },

    'Registro con éxito HappyPath Recomendación': (browser) => {
        let register = browser.page.register()

        register
            .with('Andres lopezsss', 'andreslopez3@gmail.com', 'Aa06137926%',3)

    }
}