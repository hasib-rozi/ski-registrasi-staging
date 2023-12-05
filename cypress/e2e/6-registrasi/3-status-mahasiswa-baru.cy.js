/// <reference types="Cypress" />

describe('Manajemen Status Mahasiswa Baru', () => {
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

    // Mencari status mahasiswa baru berdasarkan prodi
    it('Searching student status based on their major', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(3) > .xhr > .px-nav-label').click() // klik sub menu Status Mahassiwa Baru
            cy.get('h1').and('contain', 'Status Registrasi Mahasiswa Baru')

            cy.get(':nth-child(1) > :nth-child(1) > .col-sm-8 > .form-control').select(12)
            cy.contains('Tampilkan').click()
            // cy.get('.alert').should('be.visible').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Mencari status mahasiswa baru yang belum terdaftar
    it('Searching non-registered students status', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(3) > .xhr > .px-nav-label').click() // klik sub menu Status Mahassiwa Baru
            cy.get('h1').and('contain', 'Status Registrasi Mahasiswa Baru')

            cy.get(':nth-child(1) > :nth-child(3) > .col-sm-8 > .form-control').type('Rudi') // ketikkan nama Rudi di field nama mahasiswa
            cy.contains('Tampilkan').click()
            cy.get('em').and('contain', '-- Data tidak ditemukan --') // assertion
        })
    })

    // Cetak detail salah satu mahasiswa prodi Teknik Informatika = skip ada kendala gaes karena setelah click langsung open new browser
    it.only('Searching student status based on their major', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(3) > .xhr > .px-nav-label').click() // klik sub menu Status Mahassiwa Baru
            cy.get('h1').and('contain', 'Status Registrasi Mahasiswa Baru')

            cy.get(':nth-child(1) > :nth-child(1) > .col-sm-8 > .form-control').select(8)
            cy.contains('Tampilkan').click()

            cy.get(':nth-child(2) > :nth-child(4) > .card').click()
            // cy.get('.alert').should('be.visible').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    
})