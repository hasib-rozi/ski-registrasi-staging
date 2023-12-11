/// <reference types="Cypress" />

describe('Manajemen Kontak', () => {
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

    // Membuka halaman sub menu Kontak
    it.only('Opens Contact page', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(15) > .xhr > .px-nav-label').click() // klik sub menu Pengawas Ujian
            cy.get('h1').and('contain', 'Kontak') // assertion bahwa elemen h1 memuat tulisan Manajemen Pengawas Ujian
        })
    })

})