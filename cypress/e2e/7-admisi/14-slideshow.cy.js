/// <reference types="Cypress" />

describe('Manajemen Slideshow', () => {
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

    // Membuka halaman sub menu Slideshow
    it('Opens Slideshow page', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(14) > .xhr > .px-nav-label').click() // klik sub menu Slideshow
            cy.get('h1').and('contain', 'Slideshow') // assertion bahwa elemen h1 memuat tulisan Slideshow
        })
    })

    // SKIPP!! Menambahkan gambar pada sub menu Slideshow 
    it('Adding Slideshow file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(14) > .xhr > .px-nav-label').click() // klik sub menu Slideshow
            cy.get('h1').and('contain', 'Slideshow') // assertion bahwa elemen h1 memuat tulisan Slideshow

            cy.contains('Tambah').click()
            cy.get('.panel-title').should('have.text', 'Tambah Slideshow') // assertion elemen h1 yang memuat tulisan Tambah Slideshow
            
            cy.get('input[name="slideNama"]').type('Tes')
            cy.get('[type="file"]').click()
        })
    })

    // Batal menambahkan file slideshow = muncul lagi pesan respons only di layar
    it.only('Cancel adding Slideshow file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(14) > .xhr > .px-nav-label').click() // klik sub menu Slideshow
            cy.get('h1').and('contain', 'Slideshow') // assertion bahwa elemen h1 memuat tulisan Slideshow

            cy.contains('Tambah').click()
            cy.get('.panel-title').should('have.text', 'Tambah Slideshow') // assertion elemen h1 yang memuat tulisan Tambah Slideshow
            
            cy.contains('Batal').click()
            // cy.get('.form-control').type('Tes')
            // cy.get('[type="file"]').click()
        })
    })

    // Mengaktifkan/nonaktifkan slideshow
    it('Activate/nonactivate a slideshow', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(14) > .xhr > .px-nav-label').click() // klik sub menu Slideshow
            cy.get('h1').and('contain', 'Slideshow') // assertion bahwa elemen h1 memuat tulisan Slideshow
            
            cy.get('[data-id="11"]').click() // centang/hilangkan centang pada file slideshow paling bawah
        })
    })

})