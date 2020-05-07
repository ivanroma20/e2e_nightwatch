module.exports = {
    '@tags': ['culqi'],

    'Registro con éxito HappyPath': (browser) => {
        let register = browser.page.registroonline()
      //let codigo = browser.page.codigo()
        let comercio = browser.page.comercioonline()
        let cuenta   = browser.page.cuentasbancarias()
        let terms    = browser.page.activacioncomercio()
 
        register
            .with('Ian mora', 'test90@gmail.com', 'Aa06137926%', 2)
            .pause(30000)
        comercio
            .createMerchant('Ian online','20489523567','966707748','ianonline.pe')
        cuenta
            .createAccount('12345678912345678912')
        terms
            .acceptTerms()
    }
}










