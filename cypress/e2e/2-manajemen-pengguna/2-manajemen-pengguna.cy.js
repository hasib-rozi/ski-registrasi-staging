/// <reference types="Cypress" />

describe('User management', () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Create a username', () => {
        cy.visit('https://staging72.ecampuz.com/app/develop-v.3/eregistrasi/', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }})
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Tambahkan nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get('.btn-info').click()
            cy.get('.panel-title').and('contain', 'Tambah Pengguna')
            // cy.screenshot()
            // cy.get('.btn-toolbar > .btn').click() // klik tombol Tambah

            // // Isikan detail nama grupnya
            cy.get(':nth-child(1) > .col-sm-4 > .form-control').type('automate-user')
            cy.get(':nth-child(2) > .col-sm-4 > .form-control').type('automate')
            cy.get(':nth-child(3) > .col-sm-4 > .form-control').type('automate')
            cy.get(':nth-child(4) > .col-sm-5 > .form-control').select(2)
            cy.get('#combo_group > .form-control').select(3)
            // // cy.get('[type="checkbox"]').check({force: true})
            // cy.get('[type="checkbox"]').check(['64', '42', '81', '1', '38', '52', '5', '32', '105'])
            // cy.contains('Simpan').click()
        })
    })
})