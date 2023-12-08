/// <reference types="Cypress" />

describe('Manajemen Pendaftar', () => {
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

    //
    it.only('Opens Pendaftar sub menu', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(12) > .xhr > .px-nav-label').click() // klik sub menu Pendaftar
            cy.get('h1').and('contain', 'Pendaftar') // assertion bahwa elemen h1 memuat tulisan Pendaftar

            // cy.get('input[name="pengawas"]').type('Siti')
            // cy.contains('Tampilkan').click()
            // cy.get('.table-common-even > :nth-child(5)').should('have.text', 'Siti')
        })
    })

    // Mencari nama pengawas ujian
    // it('Searching for name of exam proctor', () => {
    //     cy.fixture("login-with-valid-credential").then(user => {
    //         const username = user.username
    //         const password = user.password

    //         cy.LoginWithValidCredential(username, password)

    //         cy.get('body')

    //         cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
    //         cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(16) > .xhr > .px-nav-label').click() // klik sub menu Pengawas Ujian
    //         cy.get('h1').and('contain', 'Manajemen Pengawas Ujian') // assertion bahwa elemen h1 memuat tulisan Manajemen Pengawas Ujian

    //         cy.get('input[name="pengawas"]').type('Siti')
    //         cy.contains('Tampilkan').click()
    //         cy.get('.table-common-even > :nth-child(5)').should('have.text', 'Siti')
    //     })
    // })

    

    // 
})