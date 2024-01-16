/// <reference types="Cypress" />

describe('Manajemen Status Bayar', () => {
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

            cy.get('select[name="semester"]').select('Ganjil')
            cy.get('select[name="tahun"]').select('2023/2024')
            cy.get('select[name="prodi"]').select('ILMU SEJARAH')
            cy.contains('Tampilkan').click()
            cy.get('tbody > :nth-child(1) > :nth-child(6)').and('contain', 'ILMU SEJARAH')
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

            cy.get('select[name="semester"]').select('Ganjil')
            cy.get('select[name="tahun"]').select('2023/2024')
            cy.get('select[name="prodi"]').select('TEKNIK INFORMATIKA')
            cy.contains('Tampilkan').click()

            cy.get(':nth-child(5) > .links > .xhr').click() // klik tombol Detil Status Bayar pada salah satu mahasiswa di urutan kelima
            cy.get('.page-header').and('contain', 'Detail Status Bayar Mahasiswa')
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

            cy.get('select[name="semester"]').select('Ganjil')
            cy.get('select[name="tahun"]').select('2024/2025')
            cy.get('select[name="prodi"]').select('TEKNIK INFORMATIKA')
            cy.get('em').and('contain', '-- Data tidak ditemukan --') // assertion atau verifikasi bahwa data tidak ditemukan
        })
    })

    
})