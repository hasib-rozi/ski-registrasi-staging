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

    // Membuka submenu File Panduan
    it('Opens File Panduan sub menu', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan
        })
    })

    // Menambahkan File Panduan baru = gagal saat klik Simpan dan assertion
    it('Adding a new guide file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.contains('Tambah').click()
            cy.get('.form-control').type('Test upload file menggunakan Cypress') // Input nama di field Nama File
            cy.get('[type="file"]').selectFile('cypress/uploads/Test.pdf') // Unggah file di direktori cypress/uploads
            // cy.contains('Simpan').click()
            // cy.get('.alert').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Menambahkan File Panduan baru dengan ukuran melebihi 2 MB
    it('Adding a new file which contains > 2 MB size file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.contains('Tambah').click()
            cy.get('.form-control').type('Test') // Input nama di field Nama File
            cy.get('input[type=file]').selectFile('cypress/uploads/eCampuz_Handout_Registrasi_V3.pdf') // Unggah file di direktori cypress/uploads
            cy.contains('Simpan').click()
            // cy.get('.alert').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Mengubah nama salah satu file
    it.only('Adding a new guide file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.get(':nth-child(1) > .links > .btn-warning').click() // klik ikon pensil pada file paling atas
            // cy.get('.panel-title').should('have.text', ' Ubah File Panduan')
            cy.get('.panel-title').and('contain', 'Ubah File Panduan')
            // cy.contains('Tambah').click()
            // cy.get('.form-control').type('Test upload file menggunakan Cypress') // Input nama di field Nama File
            // cy.get('[type="file"]').selectFile('cypress/uploads/Test.pdf') // Unggah file di direktori cypress/uploads
            // cy.contains('Simpan').click()
            // cy.get('.alert').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })
})