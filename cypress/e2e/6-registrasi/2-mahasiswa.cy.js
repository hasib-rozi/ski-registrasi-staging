/// <reference types="Cypress" />

describe('Manajemen Mahasiswa', () => {
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

    // Mencari nama mahasiswa berdasarkan periode masuk
    it.only('Searching student based on their period', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Mahasiswa
            cy.get('h1').contains('Mahasiswa')

            cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').select(1) // Pilih elemen pertama atau semester Ganjil
            cy.contains('Tampilkan').click()
            // cy.get('.alert').should('be.visible').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Mencari nama mahasiswa berdasarkan nama mahasiswa
    it('Searching student based on their name', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Mahasiswa
            cy.get('h1').contains('Mahasiswa')

            cy.get(':nth-child(2) > :nth-child(2) > .col-sm-8 > .form-control').type('Sam') // Isi field nomor test dengan nomor 122
            cy.contains('Tampilkan').click()
            // cy.get('.alert').should('be.visible').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Mencari nama mahasiswa yang datanya belum ada
    it('Searching non-registered student', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Mahasiswa
            cy.get('h1').contains('Mahasiswa')

            cy.get(':nth-child(2) > :nth-child(2) > .col-sm-8 > .form-control').type('Rudi') // ketikkan nama Rudi di field nama mahasiswa
            cy.contains('Tampilkan').click()
            cy.get('em').and('contain', '-- Data tidak ditemukan --') // assertion
        })
    })

     // Tambahkan mahasiswa baru = skip dulu gaes
     it('Searching student based on their test number or student registered number', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Mahasiswa
            cy.get('h1').contains('Mahasiswa')

            cy.contains('Tambah').click()
            cy.get('.col-md-12 > :nth-child(1) > :nth-child(1) > .panel-title').and('contain', 'Tambah Data Mahasiswa') // assertion

            cy.get('#biodata > :nth-child(1) > .col-sm-4 > .form-control').type('Cypress')
            cy.get('[type="radio"]').check('L')
            cy.get('#biodata > :nth-child(3) > .col-sm-4 > .form-control').select(12)
            cy.get('#combo_kota_lahir').select(29)
            cy.get('#biodata > :nth-child(5) > .col-sm-4 > .form-control').type('Kabupaten Tulungagung')
            cy.get('#date_mhs_tanggal_lahir').type('01/12/1998') // Input tanggal tersebut di field tanggal lahir
            cy.get('tbody > :nth-child(1) > .active').click() // Klik pada tanggal yang telah ditentukan
            cy.get('#biodata > :nth-child(7) > .col-sm-9 > .form-control').select(2)
            cy.get('#biodata > :nth-child(8) > .col-sm-9 > .form-control').select(4)
            cy.get('#biodata > :nth-child(9) > .col-sm-9 > .form-control').type(175)
            cy.get('#biodata > :nth-child(10) > .col-sm-9 > .form-control').type(67)
            cy.get(':nth-child(11) > .col-sm-9 > [value="0"]').check()
            cy.get(':nth-child(12) > .col-sm-9 > [value="0"]').check()
            cy.get(':nth-child(13) > .col-sm-9 > [value="1"]').check()

            cy.get('#mahasiswa > .nav > :nth-child(2) > a').click() // beralih ke tab Kemahasiswaan
            cy.get('#cmbPilProdi').select(7)
        })
    })

    // Tampilkan data mahasiswa lalu ekspor ke Excel = skip dulu gaes
    it('Export students data to Excel', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(6) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(2) > .xhr > .px-nav-label').click() // klik sub menu Mahasiswa
            cy.get('h1').contains('Mahasiswa')

            cy.get(':nth-child(2) > :nth-child(2) > .col-sm-8 > .form-control').type('Sam') // Isi field nomor test dengan nomor 122
            cy.contains('Tampilkan').click()
            cy.get('#form_list > .panel > .panel-heading > .panel-title').and('contain', 'Data Mahasiswa')

            cy.get('[href="/app/develop-v.3/eregistrasi/index.php?mod=mahasiswa&sub=daftarMahasiswa&act=view&typ=xls&tahunMasuk=&semsMasuk=&isCalon=&notes_nim=&prodi=&jalur=&nama=Sam&status_masuk=all"]').click() // Ekspor ke Excel

            cy.verifyDownload('DaftarMahasiswa.xls');
            
        })
    })

    it('Verify download file', () => {
        cy.verifyDownload('DaftarMahasiswa.xls')
    })
})