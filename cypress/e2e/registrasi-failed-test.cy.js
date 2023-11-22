/// <reference types="Cypress" />

/// This is beta project. I'll delete it soon

describe('Opens the page', () => {
    it('passes', () => {
        cy.visit('https://staging.ecampuz.com/app/develop-v.3/', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }})
        cy.contains('Registrasi').click()
        cy.get('a[href="https://staging72.ecampuz.com/app/develop-v.3/eregistrasi/"]', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }}).should('have.attr', 'target', '_blank')    
    })
})