/// <reference types="Cypress" />

describe('Manajemen Jalur', () => {
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

    // Mencari data jalur berdasarkan periode Ganjil 2023/2024 gelombang II
    it('Search for path data based on a specific period', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(4) > .xhr > .px-nav-label').click() // klik sub menu Manajemen Jalur
            cy.get('h1').and('contain', 'Manajemen Jalur') // assertion Manajemen Jalur

            cy.get(':nth-child(1) > .col-md-4 > .form-control').select(4)
            cy.get(':nth-child(2) > .col-md-4 > .form-control').select(2)
            cy.contains('Tampilkan').click()
        })
    })

    // Mencari data jalur yang datanya kosong
    it.only('Search for empty data', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(4) > .xhr > .px-nav-label').click() // klik sub menu Manajemen Jalur
            cy.get('h1').and('contain', 'Manajemen Jalur') // assertion Manajemen Jalur

            cy.get(':nth-child(1) > .col-md-4 > .form-control').select(1)
            cy.get(':nth-child(2) > .col-md-4 > .form-control').select(1)
            cy.contains('Tampilkan').click()

            cy.get('em').and('contain', '-- Data tidak ditemukan --')
        })
    })

    // Menambahkan data jalur baru -> periode Ganjil 2023/2024 Gelombang VII kelompok IPS 
    it('Should adding a new data', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(4) > .xhr > .px-nav-label').click() // klik sub menu Manajemen Jalur
            cy.get('h1').and('contain', 'Manajemen Jalur') // assertion Manajemen Jalur

            cy.contains('Tambah').click()
            cy.get('.panel-title').and('contain', 'Tambah Manajemen Jalur Per Gelombang')

            cy.get(':nth-child(1) > .col-sm-4 > .form-control').select(3)
            cy.get(':nth-child(2) > .col-sm-4 > .form-control').select(6)
            cy.get(':nth-child(3) > .col-sm-4 > .form-control').select(8)
            cy.get(':nth-child(4) > .col-sm-4 > .form-control').select(1)
            cy.get('#date_mulai').type('01-12-2023')
            cy.get('tbody > :nth-child(1) > .active').click()
            cy.get('#date_selesai').type('20-02-2024')
            cy.get('tbody > :nth-child(4) > .active').click()
            cy.contains('Simpan').click()
            cy.get('.alert').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Menambahkan data jalur yang sudah ada 
    it('Add with existing data', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(4) > .xhr > .px-nav-label').click() // klik sub menu Manajemen Jalur
            cy.get('h1').and('contain', 'Manajemen Jalur') // assertion Manajemen Jalur

            cy.contains('Tambah').click()
            cy.get('.panel-title').and('contain', 'Tambah Manajemen Jalur Per Gelombang')

            cy.get(':nth-child(1) > .col-sm-4 > .form-control').select(3)
            cy.get(':nth-child(2) > .col-sm-4 > .form-control').select(6)
            cy.get(':nth-child(3) > .col-sm-4 > .form-control').select(8)
            cy.get(':nth-child(4) > .col-sm-4 > .form-control').select(1)
            cy.get('#date_mulai').type('01-12-2023')
            cy.get('tbody > :nth-child(1) > .active').click()
            cy.get('#date_selesai').type('20-02-2024')
            cy.get('tbody > :nth-child(4) > .active').click()
            cy.contains('Simpan').click()
            cy.get('.alert').and('contain', 'Data Jalur Sudah Ada') // Expected bahwa data jalur sudah ada sebelumnya
        })
    })

    
})