/// <reference types="Cypress" />

describe('Manajemen Grup', () => {
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

    it.only('Create a group name', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Tambahkan nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu grup
            // cy.screenshot()
            cy.get('.btn-toolbar > .btn').click() // klik tombol Tambah

            // Isikan nama grup, deskripsi, unit kerja, dan hak akses
            // cy.get('input[name="groupname"]').type('Automate Group')
            cy.get(':nth-child(2) > .col-sm-8 > #combo_group > .form-control').type('Admin FIB')
            cy.get(':nth-child(3) > .col-sm-8 > #combo_group > .form-control').type('Ini adalah nama grup yang dibuat untuk melayani kegiatan akademik di FIB')
            cy.get('.col-sm-8 > .form-control').select(1)
            // cy.get('[type="checkbox"]').check({force: true})
            cy.get('[type="checkbox"]').check(['64', '42', '81', '1', '38', '52', '5', '32', '105'])
            cy.contains('Simpan').click()
        })
    })

    it('Edit the description of a group name', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Ubah deskripsi grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(2) > .links > .btn-warning').click() // klik tombol Edit
            cy.get(':nth-child(3) > .col-sm-8 > #combo_group > .form-control').clear().type('Grup ini dibuat dengan automation testing')
            cy.contains('Simpan').click()
            cy.get('.alert')
        })
    })

    // Menghapus field nama grup
    it('Delete a group name', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Hapus nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(2) > .links > .btn-warning').click() // klik tombol Edit
            cy.get(':nth-child(2) > .col-sm-8 > #combo_group > .form-control').clear()
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Isian Nama Grup tidak boleh kosong.')
        })
    })

    it('Uncheck an access right from Ubah Grup menu', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Hapus checklist salah satu hak akses di grup menu
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(2) > .links > .btn-warning').click() // klik tombol Edit
            cy.get('[type="checkbox"]').uncheck(['64'])
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Pengubahan Data Berhasil Dilakukan')
        })
    })

    it('Edit a group name', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Sunting salah satu nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(2) > .links > .btn-warning').click() // klik tombol Edit
            cy.get(':nth-child(2) > .col-sm-8 > #combo_group > .form-control').clear().type('Automation Testing Group')
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Pengubahan Data Berhasil Dilakukan')
        })
    })

    it('Undo Delete a group name', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Batal hapus nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(2) > .links > .btn-danger > .fa').click() // klik tombol Hapus pada Automation Grup
            cy.get('#dialog_delete > h2').contains('Menghapus Group') // assertion untuk memastikan bahwa laman memuat tulisan "Menghapus Group"
            
            cy.get('.xhr > .button').click() // klik tombol Batal
            cy.get('.text-muted').contains('Manajemen Grup')
        })
    })

    it('Delete a group', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Hapus nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(2) > .links > .btn-danger > .fa').click() // klik tombol Hapus pada Automation Group
            cy.get('#dialog_delete > h2').contains('Menghapus Group') // assertion untuk memastikan bahwa laman memuat tulisan "Menghapus Group"
            
            cy.get('.btn-danger > .fa').click() // klik tombol Hapus
            cy.get('.alert').should('be.visible').and('contain', 'Penghapusan Data Berhasil Dilakukan')
        })
    })
})