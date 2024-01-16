/// <reference types="Cypress" />

describe('Manajemen Verifikasi', () => {
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

    // Menampilkan data mahasiswa Teknik Informatika yang terverifikasi 
    it('Show verified student', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(6) > .xhr > .px-nav-label').click() // klik sub menu Verifikasi
            cy.get('h1').and('contain', 'Verifikasi') // assertion bahwa elemen h1 memuat tulisan Verifikasi

            cy.get('select[name="prodi"]').select('TEKNIK INFORMATIKA') // pilih prodi Teknik Informatika 
            cy.contains('Tampilkan').click()
            cy.get('tbody > :nth-child(1) > :nth-child(6)').and('contain', 'TEKNIK INFORMATIKA')
        })
    })

    // Menampilkan data mahasiswa Teknik Informatika yang terverifikasi 
    it.only('Show verified student', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(6) > .xhr > .px-nav-label').click() // klik sub menu Verifikasi
            cy.get('h1').and('contain', 'Verifikasi') // assertion bahwa elemen h1 memuat tulisan Verifikasi

            cy.get('select[name="prodi"]').select('TEKNIK INFORMATIKA') // pilih prodi Teknik Informatika
            cy.get('select[name="status_reg"]').select('Belum')
            cy.contains('Tampilkan').click()
            cy.get('tbody > :nth-child(1) > :nth-child(6)').and('contain', 'TEKNIK INFORMATIKA')
        })
    })


})