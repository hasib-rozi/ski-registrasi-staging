/// <reference types="Cypress" />

describe('Manajemen Pengguna', () => {
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

    // Membuat nama pengguna baru
    it('Create a username', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Tambahkan nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get('.btn-info').click()
            cy.get('.panel-title').and('contain', 'Tambah Pengguna')

            // // Isikan detail nama pengguna
            cy.get('.text-muted').contains('Manajemen Pengguna') // assertion untuk memastikan bahwa laman memuat tulisan "Manajemen Pengguna"
            cy.get(':nth-child(1) > .col-sm-4 > .form-control').type('automate-user')
            cy.get(':nth-child(2) > .col-sm-4 > .form-control').type('automate')
            cy.get(':nth-child(3) > .col-sm-4 > .form-control').type('automate')
            cy.get(':nth-child(4) > .col-sm-5 > .form-control').select(2)
            cy.get('#combo_group > .form-control').select(2)
            cy.get(':nth-child(6) > .col-sm-5 > .form-control').type('Tes Otomatisasi')
            cy.get(':nth-child(7) > .col-sm-5 > .form-control').type('Nama pengguna ini dibuat dengan memakai tes otomatisasi')
            cy.get('#status_yes').check()
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Membuat pengguna baru dengan password dan konfirmasi password yang tidak sama
    it('Create a username with different password', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Tambahkan nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get('.btn-info').click()
            cy.get('.panel-title').and('contain', 'Tambah Pengguna')

            // // Isikan detail nama pengguna
            cy.get('.text-muted').contains('Manajemen Pengguna') // assertion untuk memastikan bahwa laman memuat tulisan "Manajemen Pengguna"
            cy.get(':nth-child(1) > .col-sm-4 > .form-control').type('test-otomasi')
            cy.get(':nth-child(2) > .col-sm-4 > .form-control').type('otomasi')
            cy.get(':nth-child(3) > .col-sm-4 > .form-control').type('automation')
            cy.get(':nth-child(4) > .col-sm-5 > .form-control').select(2)
            cy.get('#combo_group > .form-control').select(2)
            cy.get(':nth-child(6) > .col-sm-5 > .form-control').type('Tes Otomatisasi')
            cy.get(':nth-child(7) > .col-sm-5 > .form-control').type('Nama pengguna ini dibuat dengan memakai tes otomatisasi')
            cy.get('#status_yes').check()
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Password dan Konfirmasi password harus sama')
        })
    })

    // Membuat pengguna baru dengan nama pengguna yang sudah ada
    it('Create a username with an existing username', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Tambahkan nama grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get('.btn-info').click()
            cy.get('.panel-title').and('contain', 'Tambah Pengguna')

            // // Isikan detail nama pengguna
            cy.get('.text-muted').contains('Manajemen Pengguna') // assertion untuk memastikan bahwa laman memuat tulisan "Manajemen Pengguna"
            cy.get(':nth-child(1) > .col-sm-4 > .form-control').type('rosates')
            cy.get(':nth-child(2) > .col-sm-4 > .form-control').type('otomasi')
            cy.get(':nth-child(3) > .col-sm-4 > .form-control').type('otomasi')
            cy.get(':nth-child(4) > .col-sm-5 > .form-control').select(2)
            cy.get('#combo_group > .form-control').select(2)
            cy.get(':nth-child(6) > .col-sm-5 > .form-control').type('Tes Otomatisasi')
            cy.get(':nth-child(7) > .col-sm-5 > .form-control').type('Nama pengguna ini dibuat dengan memakai tes otomatisasi')
            cy.get('#status_yes').check()
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Nama pengguna rosates sudah ada.')
        })
    })

    // Menyunting nama pengguna
    it('Edit a username', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Masuk menu grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            // cy.get('.btn-info').click()
            cy.get(':nth-child(4) > .links > .btn-warning').click()
            cy.get('.panel-title').and('contain', 'Ubah Pengguna') // assertion

            // Ubah nama pengguna
            cy.get('.col-sm-4 > .form-control').clear().type('automation-user')
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Pengubahan Data Berhasil Dilakukan')
        })
    })

    // Ubah password pengguna
    it('Change password', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Masuk menu grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            // cy.get('.btn-info').click()

            // Ubah password pengguna
            cy.get(':nth-child(4) > .links > .btn-default').click()
            cy.get('.panel-title').and('contain', 'Ubah Password') // assertion
            cy.get(':nth-child(1) > div.col-sm-3 > .form-control').type('automatebaru')
            cy.get(':nth-child(2) > div.col-sm-3 > .form-control').type('automatebaru')
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Pengubahan Password Berhasil Dilakukan')
        })
    })

    // Ubah password pengguna (field password dan konfirmasi password tidak sama)
    it('Change password with different password', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Masuk menu grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            // cy.get('.btn-info').click()

            // Ubah password pengguna
            cy.get(':nth-child(4) > .links > .btn-default').click()
            cy.get('.panel-title').and('contain', 'Ubah Password') // assertion
            cy.get(':nth-child(1) > div.col-sm-3 > .form-control').type('automatebaru')
            cy.get(':nth-child(2) > div.col-sm-3 > .form-control').type('automatelama')
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Password dan Konfirmasi password harus sama.')
        })
    })

    // Menghapus field nama pengguna
    it('Delete an username in the username field', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Masuk menu grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            // cy.get('.btn-info').click()
            cy.get(':nth-child(4) > .links > .btn-warning').click()
            cy.get('.panel-title').and('contain', 'Ubah Pengguna') // assertion

            // Hapus nama pengguna
            cy.get('.col-sm-4 > .form-control').clear()
            cy.contains('Simpan').click()
            cy.get('.alert').should('be.visible').and('contain', 'Isian Nama Pengguna tidak boleh kosong.')
        })
    })

    // Cari nama pengguna di field Nama Pengguna
    it('Searching an username in the username field', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Masuk menu grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(1) > .col-sm-8 > .form-control').type('rosa') // ketikkan nama rosa di field Nama Pengguna
            cy.contains('Tampilkan').click()
            cy.get('h1').and('contain', 'Manajemen Pengguna') // assertion
        })
    })

    // Cari nama pengguna di field Nama Asli
    it.only('Searching an username in the username field', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Masuk menu grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup
            cy.get(':nth-child(2) > .col-sm-8 > .form-control').type('Hasib') // ketikkan nama rosa di field Nama Pengguna
            cy.contains('Tampilkan').click()
            cy.get('h1').and('contain', 'Manajemen Pengguna') // assertion
        })
    })

    // Hapus pengguna
    it('Delete an username', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            // Masuk menu grup
            cy.get(':nth-child(2) > [href="#"] > .px-nav-label').click() // klik dropdown-menu Manajemen Prngguna
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik submenu grup

            // Hapus nama pengguna
            cy.get(':nth-child(4) > .links > .btn-danger > .fa').click()
            cy.get('#dialog_delete > h2').and('contain', 'Menghapus User')
            cy.get('.btn-danger').click()
            cy.get('.alert').should('be.visible').and('contain', 'Penghapusan Data Berhasil Dilakukan.')
        })
    })
})