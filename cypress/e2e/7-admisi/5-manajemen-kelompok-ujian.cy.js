/// <reference types="Cypress" />

describe('File Panduan', () => {
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

    // Membuka submenu Manajemen Kelompok Ujian
    it('Opens Manajemen Kelompok Ujian sub menu', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(5) > .xhr > .px-nav-label').click() // klik sub menu Manajemen Kelompok Ujian
            cy.get('h1').and('contain', 'Manajemen Kelompok Ujian Masuk') // assertion bahwa elemen h1 memuat tulisan Manajemen Kelompok Ujian
        })
    })

    // Mencari data manajemen kelompok ujian periode Ganjil 2023/2024 gelombang I
    it.only('Search for certain data', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(5) > .xhr > .px-nav-label').click() // klik sub menu Manajemen Kelompok Ujian
            cy.get('h1').and('contain', 'Manajemen Kelompok Ujian Masuk') // assertion bahwa elemen h1 memuat tulisan Manajemen Kelompok Ujian

            cy.get(':nth-child(1) > .col-md-4 > .form-control').select(4) // Pilih Ganjil 2023/2024 pada field Periode
            cy.get(':nth-child(2) > .col-md-4 > .form-control').select(1) // Pilih Gelombang I
            cy.contains('Tampilkan').click()
        })
    })

    // 
})