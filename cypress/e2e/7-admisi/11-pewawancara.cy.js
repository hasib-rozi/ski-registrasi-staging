/// <reference types="Cypress" />

describe('Manajemen Pewawancara', () => {
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

    // Membuka halaman sub menu Pewawancara
    it('Opens Pewawancara page', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(11) > .xhr > .px-nav-label').click() // klik sub menu Pewawancara
            cy.get('h1').and('contain', 'Manajemen Pewawancara') // assertion bahwa elemen h1 memuat tulisan Manajemen Pewawancara
        })
    })

    // Menambahkan daftar pewawancara
    it.only('Adding an interviewer', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(11) > .xhr > .px-nav-label').click() // klik sub menu Pewawancara
            cy.get('h1').and('contain', 'Manajemen Pewawancara') // assertion bahwa elemen h1 memuat tulisan Manajemen Pewawancara

            cy.contains('Tambah').click()
            cy.get('.panel-title').should('have.text', 'Tambah Pewawancara')

            cy.get('input[name="pewawancara_nama_lokal"]').type('311111')
            cy.get('input[name="pewawancara_nama_asing"]').type('Rudi')
        })
    })

})