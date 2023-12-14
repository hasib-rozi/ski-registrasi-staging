/// <reference types="Cypress" />

describe('Manajemen Tahap Penerimaan', () => {
    before(() => {
        cy.visit('https://staging72.ecampuz.com/app/develop-v.3/eregistrasi/', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    // Membuka halaman sub menu Tahap Penerimaan
    it('Opens Tahap Penerimaan page', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(13) > .xhr > .px-nav-label').click() // klik sub menu Tahap Penerimaan
            cy.get('h1').contains('Referensi Tahap Penerimaan').should('be.visible') // assertion bahwa elemen h1 memuat tulisan Referensi Tahap Penerimaan
            // cy.get('h1').and('contain', 'Referensi Tahap Penerimaan') // Terjadi error karena ketika inspect element, ada pemisahan antara "Referensi Tahap" dan "Penerima"
            // cy.get('h1').and('contain', 'Referensi Tahap')
            // cy.get('h1').and('contain', 'Penerimaan')
        })
    })

})