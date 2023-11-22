/// <reference types="Cypress" />

describe('Opens the eRegistrasi page', () => {
    it('Login passes', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://staging72.ecampuz.com/app/develop-v.3/eregistrasi/', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }})
        cy.get('#username').type('rozi', {force: true})
        cy.get('#password').type('rozi123', {force: true})
        cy.contains('LOGIN').click()
        cy.get('body')
    })
})