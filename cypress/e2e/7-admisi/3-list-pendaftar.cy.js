/// <reference types="Cypress" />

describe('Manajemen List Pendaftar', () => {
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

    // Membuka submenu List Pendaftar
    it('Opens List Pendaftar sub menu', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(3) > .xhr > .px-nav-label').click() // klik sub menu List Pendaftar
            cy.get('h1').and('contain', 'List Pendaftar') // assertion bahwa elemen h1 memuat tulisan List Pendaftar
        })
    })

    // Mencari data list pendaftar berdasarkan filter tertentu
    it.only('Searching from applicants based on specific filter', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(3) > .xhr > .px-nav-label').click() // klik sub menu List Pendaftar
            cy.get('h1').and('contain', 'List Pendaftar') // assertion bahwa elemen h1 memuat tulisan List Pendaftar

            cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').select(1) // Pilih periode masuk Ganjil
            cy.get(':nth-child(3) > .form-control').select(2) // Pilih tahun akademik 2023/2024
            cy.get(':nth-child(1) > :nth-child(2) > .col-md-8 > .form-control').select(7) // Pilih Teknik Informatika - S1
            cy.get(':nth-child(1) > :nth-child(3) > .col-md-8 > .form-control').select(1) // Pilih Gelombang 1
            cy.get(':nth-child(1) > :nth-child(4) > .col-md-8 > .form-control').select(9) // Pilih Reguler
            cy.get(':nth-child(1) > .col-md-8 > .form-control').select(1) // Pilih kelompok Ujian IPA
            cy.get(':nth-child(2) > :nth-child(2) > .col-md-8 > .form-control').select(1) // Pilih ruang 1 
            
        })
    })

    // 
})