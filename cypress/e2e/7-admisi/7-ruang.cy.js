/// <reference types="Cypress" />

describe('Manajemen Ruang', () => {
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

    // Mencari ruangan  dengan Gedung WS Rendra dan kelompok ujian IPS
    it('Opens Manajemen Kelompok Ujian sub menu', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(8) > .xhr > .px-nav-label').click() // klik sub menu Ruang
            cy.get('h1').and('contain', 'Manajemen Ruang') // assertion bahwa elemen h1 mengandung tulisan Manajemen Ruang

            cy.get(':nth-child(1) > .col-sm-9 > .form-control').select(5) // pilih WS Rendra pada field Nama Gedung
            cy.get(':nth-child(2) > .col-sm-9 > .form-control').select(2) // pilih kelompok ujian IPS
            cy.contains('Tampilkan').click()
            cy.get('tbody > tr > :nth-child(4)').and('contain', 'Gedung WS Rendra - GD03')
        })
    })

    // 
})