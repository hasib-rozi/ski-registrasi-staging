import 'cypress-file-upload'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('uploadFile', (selector, fileName, fileType) => {
    return cy.get(selector).attachFile({ filePath: fileName, fileType })
})

Cypress.Commands.add('LoginWithValidCredential', (username, password) => {
    cy.get('#username').clear
    cy.get('#username').type(username, {force: true})
    cy.get('#password').clear
    cy.get('#password').type(password, {force: true})
    // cy.get('iframe[src*=recaptcha]').then(($iframe) => {
    //     const iframeDocument = $iframe.contents();
    //     const recaptchaToken = iframeDocument.find('#recaptcha-token');
    //     cy.wait(35000)
    //     recaptchaToken.click();
    // });
    cy.contains('LOGIN').click()
})

Cypress.Commands.add('LoginWithValidUsername', (username, password) => {
    cy.get('#username').clear
    cy.get('#username').type(username, {force: true})
    cy.get('#password').clear
    cy.get('#password').type(password, {force: true})
    cy.contains('LOGIN').click()
})

Cypress.Commands.add('LoginWithValidPassword', (username, password) => {
    cy.get('#username').clear
    cy.get('#username').type(username, {force: true})
    cy.get('#password').clear
    cy.get('#password').type(password, {force: true})
    cy.contains('LOGIN').click()
})

Cypress.Commands.add('LoginWithEyePass', (username, password) => {
    cy.get('#username').clear
    cy.get('#username').type(username, {force: true})
    cy.get('#password').clear
    cy.get('#eyepass').click()
    cy.get('#password').type(password, {force: true})
    cy.contains('LOGIN').click()
})