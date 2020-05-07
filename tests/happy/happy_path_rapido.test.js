module.exports = {
    //'@tags': ['culqi'],

    'Registro con éxito HappyPath': (browser) => {
        let register = browser.page.registrorapido()
        let fin      = browser.page.finonboarning()

        register
            .with('Ian mora', 'ivanbeto51@gmail.com', 'Aa06137926%', 2)
            .pause(30000)
    }
}










