/// <reference types="Cypress" />

describe('Login to dashboard', () => {
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

    // Login dengan username & password yang benar
    it('Login passes', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')
        })
    })

    // Login dengan username salah dan password benar
    it('Login with invalid username and valid password', () => {
        
        cy.fixture("login-with-valid-password").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidPassword(username, password)

            cy.get('.alert').should('be.visible').and('contain', 'Proses login tidak berhasil, Isi dengan benar Username dan Password, dan Centang Isian Captcha untuk Kelengkapan Validasi.')
        })
    })

    // Login dengan username benar dan password salah
    it('Login with valid username and invalid password', () => {
        
        cy.fixture("login-with-valid-username").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidUsername(username, password)

            cy.get('.alert').should('be.visible').and('contain', 'Proses login tidak berhasil, Isi dengan benar Username dan Password, dan Centang Isian Captcha untuk Kelengkapan Validasi.')
        })
    })

    // Login dengan menampilkan password
    it.only('Login passes with showing password', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithEyePass(username, password)

            cy.get('body')
        })
    })
})