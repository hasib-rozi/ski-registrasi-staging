/// <reference types="Cypress" />

describe('Manajemen Gedung', () => {
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

    // Mencari nama gedung perkuliahan
    it('Searching for a building name', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Status Bayar
            cy.get('h1').and('contain', 'Manajemen Gedung') // assertion Manajemen Gedung

            cy.get('input[name="gedung"]').type('Rendra') // inputkan kata kunci "Rendra" pada kolom tersebut
            cy.contains('Tampilkan').click()
        })
    })

    // Menambahkan gedung baru
    it('Searching for a building name', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Status Bayar
            cy.get('h1').and('contain', 'Manajemen Gedung') // assertion Manajemen Gedung

            cy.contains('Tambah').click()
            cy.get('.panel-title').and('contain', 'Tambah Gedung') // assertion tambah gedung

            cy.get(':nth-child(1) > .col-sm-4 > .form-control').type('GD06') // tambahkan kode Gedung dengan kode "GD06"
            cy.get(':nth-child(2) > .col-sm-4 > .form-control').type('Gedung Otomatis') //tambahkan nama gedung "Gedung Otomatis"
            cy.contains('Simpan').click()
            cy.get('.alert').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Ubah data gedung dari Gedung Otomatisasi menjadi Gedung Cypress
    it.only('Edit a building name', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Status Bayar
            cy.get('h1').and('contain', 'Manajemen Gedung') // assertion Manajemen Gedung

            cy.get(':nth-child(1) > .links > .btn-warning').click()
            cy.get('.panel-title').and('contain', 'Ubah Gedung') //assertion

            cy.get(':nth-child(2) > .col-sm-4 > .form-control').clear().type('Gedung Cypress') // hapus nama gedung dan ganti menjadi "Gedung Cypress"
            cy.contains('Simpan').click()
            cy.get('.alert').and('contain', 'Perubahan Data Berhasil Dilakukan')

            // cy.contains('Hapus').click()
            // cy.get('#dialog_delete > h2').and('contain', 'Menghapus Manajemen Gedung') // assertion

            // cy.get('.btn-danger').click()
            // cy.get('.alert').and('contain', 'Penghapusan Data Berhasil Dilakukan')
        })
    })

    // Menghapus data gedung
    it('Delete a building data', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Status Bayar
            cy.get('h1').and('contain', 'Manajemen Gedung') // assertion Manajemen Gedung

            cy.get('#gedung_id_1').check() // 
            cy.contains('Hapus').click() // Klik tombol Hapus
            cy.get('#dialog_delete > h2').and('contain', 'Menghapus Manajemen Gedung') // assertion

            cy.get('.btn-danger').click()
            cy.get('.alert').and('contain', 'Penghapusan Data Berhasil Dilakukan')
        })
    })
})