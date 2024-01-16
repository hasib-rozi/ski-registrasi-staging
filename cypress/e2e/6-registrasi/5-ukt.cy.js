/// <reference types="Cypress" />

describe('Manajemen UKT', () => {
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

    // Mencari nama mahasiswa berdasarkan spesifikasi tertentu
    it.only('Searching student data based on certain specification', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(5) > .xhr > .px-nav-label').click() // klik sub menu UKT
            cy.get('h1').and('contain', 'UKT Mahasiswa') // assertion bahwa elemen h1 memuat tulisan UKT Mahasiswa

            // cy.get('select[name="sems_masuk"]').select(1) // pilih sintaks ini untuk memilih berdasarkan index
            cy.get('select[name="sems_masuk"]').select('GANJIL') // pilih sintaks ini berdasarkan teks isi di dalamnya
            cy.get('select[name="tahun_masuk"]').select('2023') // pilih ini berdasrakan value (bisa juga memilih berdasarkan pilihan di dalamnya misalnya 2023/2024)
            cy.get('select[name="program_studi"]').select('ILMU SEJARAH  -  S1 Reguler')
            cy.get('select[name="jalur"]').select('REG (Reguler)')
            cy.contains('Tampilkan').click()

            cy.get('.table-common-even > :nth-child(7)').should('have.text', 'ILMU SEJARAH - S1 Reguler') // assertion
        })
    })


})