

module.exports = {
    '@tags': ['admin'],
    
    'success login': (browser) => {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('admin@culqi.com', 'pAad3.R2SxTV.a3A')

        sidebar.expectLoggedUser('Culqi')
    }
}

