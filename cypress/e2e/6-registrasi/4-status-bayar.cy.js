/// <reference types="Cypress" />

describe('Status Bayar', () => {
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

    // Mencari data status bayar mahasiswa Ilmu Sejarah semester ganjil 2023/2024 
    it('Searching student status based on their major', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(4) > .xhr > .px-nav-label').click() // klik sub menu Status Bayar
            cy.get('h1').and('contain', 'Status Bayar Mahasiswa') // assertion Status Bayar Mahasiswa

            cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').select(1)
            cy.get(':nth-child(3) > .form-control').select(2)
            cy.get(':nth-child(1) > :nth-child(2) > .col-sm-8 > .form-control').select(12)
            cy.contains('Tampilkan').click()
        })
    })

    // // Mencari detail status bayar salah satu mahasiswa Teknik Informatika semester ganjil 2023/2024 
    it('Searching student status based on their major', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(4) > .xhr > .px-nav-label').click() // klik sub menu Status Bayar
            cy.get('h1').and('contain', 'Status Bayar Mahasiswa') // assertion Status Bayar Mahasiswa

            cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').select(1)
            cy.get(':nth-child(3) > .form-control').select(2)
            cy.get(':nth-child(1) > :nth-child(2) > .col-sm-8 > .form-control').select(8)
            cy.contains('Tampilkan').click()

            cy.get(':nth-child(5) > .links > .xhr').click() // klik tombol Detil Status Bayar pada nama REGGIE JOHNSON
            cy.get(':nth-child(2) > .col-sm-9').and('contain', 'REGGIE JOHNSON')
        })
    })

    // Mencari data status bayar mahasiswa semester pendek 2024/2025 
    it.only('Searching student status based on their major', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(4) > .xhr > .px-nav-label').click() // klik sub menu Status Bayar
            cy.get('h1').and('contain', 'Status Bayar Mahasiswa') // assertion Status Bayar Mahasiswa

            cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').select(3)
            cy.get(':nth-child(3) > .form-control').select(1)
            cy.contains('Tampilkan').click()
            cy.get('em').and('contain', '-- Data tidak ditemukan --') // assertion atau verifikasi bahwa data tidak ditemukan
        })
    })

    
})