/// <reference types="Cypress" />

describe('Periode', () => {
    before(() => {
        cy.visit('https://staging72.ecampuz.com/app/develop-v.3/eregistrasi/', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }})
        Cypress.on('uncaught:exception', (err, runable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    // Aktivasi semester lain
    it('Activate another semester', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu Periode
            cy.get('.text-muted').and('contain', 'Periode') // assertion
            cy.get(':nth-child(4) > :nth-child(3) > ._xhr').click()
            cy.get('.alert').should('be.visible').and('contain', 'Periode Berhasil Diaktifkan') // assertion
        })
    })

    // Tambah Periode
    it('Add another period', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu Periode
            cy.get('.text-muted').and('contain', 'Periode') // assertion


            cy.contains('Tambah').click()
            cy.get(':nth-child(3) > div.col-sm-3 > .form-control').select()
            cy.get(':nth-child(4) > div.col-sm-3 > .form-control').select()
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Penambahan Data Berhasil Dilakukan') // assertion
        })
    })

    // Edit periode semester aktif - masih perlu diperbaiki
    it('Edit active period', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu Periode
            cy.get('.text-muted').and('contain', 'Periode') // assertion

            cy.get(':nth-child(1) > :nth-child(2) > .btn-warning').click()
            cy.get(':nth-child(3) > div.col-sm-3 > .form-control').select(8)
            cy.get(':nth-child(4) > div.col-sm-3 > .form-control').select(1)
            cy.contains('Simpan').click()
            cy.get('h2').contains('Konfirmasi Tambah Periode')
            cy.contains('Simpan').click()
            // cy.get('.alert').should('be.visible').and('contain', 'Periode Berhasil Diaktifkan') // assertion
        })
    })

    // Batal hapus periode semester
    it.only('Undo delete active period', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu Periode
            cy.get('.text-muted').and('contain', 'Periode') // assertion

            cy.get(':nth-child(1) > :nth-child(2) > .btn-danger').click()
            cy.get('#dialog_delete > h2').and('contain', 'Menghapus Periode') // assertion

            cy.get('.xhr > .button').click()
            cy.get('.text-muted').and('contain', 'Periode') // assertion
        })
    })

    // Hapus periode semester
    it('Delete active period', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu Periode
            cy.get('.text-muted').and('contain', 'Periode') // assertion

            cy.get(':nth-child(1) > :nth-child(2) > .btn-danger').click()
            cy.get('#dialog_delete > h2').and('contain', 'Menghapus Periode') // assertion

            cy.get('.btn-danger').click()
            cy.get('.alert').should('be.visible').and('contain', 'Periode Berhasil Diaktifkan') // assertion
        })
    })
})