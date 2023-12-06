/// <reference types="Cypress" />

describe('File Panduan', () => {
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

    // Membuka submenu File Panduan
    it('Opens File Panduan sub menu', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan
        })
    })

    // Menambahkan File Panduan baru = tidak menampilkan laman setelah simpan file
    it('Adding a new guide file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.contains('Tambah').click()
            cy.get('.form-control').type('Test upload file menggunakan Cypress kesekian') // Input nama di field Nama File
            const fileName = "Test.pdf";
            cy.fixture(fileName, "binary")
              .then(Cypress.Blob.binaryStringToBlob)
              .then((fileContent) => {
                cy.get("input[type=file]").attachFile({
                    fileContent,
                    fileName: "Test.pdf",
                    mimeType: "app;ication/pdf",
                    encoding: "utf-8"
                })
              })
            //   cy.intercept('POST', 'https://staging72.ecampuz.com/app/develop-v.3/eregistrasi/index.php?mod=file_panduan&sub=filePanduan&act=view&typ=html&page='), (req) => {
            //     req.reply({
            //         body: {
            //             exec: 'GtfwAjax.replaceContentWithUrl(\"subcontent-element\",\"\/app\/develop-v.3\/eregistrasi\/index.php?mod=file_panduan&sub=filePanduan&act=view&typ=html&page=&ascomponent=1\")', // Replace with the desired response body
            //         },
            //         headers: {
            //             "content-type": "text/html; charset=UTF-8",
            //         },
            //         statusCode: 200, // replace with the desired status code
            //     })
            //   }
            cy.contains('Simpan').click()
        })
    })

    // it.only('Add File Panduan', () => {
    //     Cypress.on('uncaught:exception', (err, runnable) => {
    //       // cy.log(err);
    //       return false
    //     });
    //     cy.wait(Cypress.env('waiting_timeout'));
    //     cy.get('[title="Tambah Data File Panduan"]').click();
    //     cy.wait(Cypress.env('waiting_timeout'));
    
    //     cy.fixture('Test.pdf', 'base64').then(fileContent => {
    //       cy.get('input[type="file"]').upload(
    //         {
    //           fileContent,
    //           fileName: 'Test.pdf',
    //           mimeType: 'application/json'
    //         }, { subjectType: 'input' },
    //       );
    //     });
    
    
    //     let name = 'Panduan ' + new Date().getTime();
    //     panduanName = name;
    //     cy.get('[name="name"]').type(name);
    //     cy.get('#form-input [name="submit"]').click();
    //     cy.wait(Cypress.env('waiting_timeout'));
    //     cy.get('#subcontent-element').should('contain', 'Penambahan Data Berhasil Dilakukan');
    //   });
    

    // Menambahkan File Panduan baru dengan ukuran melebihi 2 MB == skip
    it('Adding a new file which contains > 2 MB size file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.contains('Tambah').click()
            cy.get('.form-control').type('Test') // Input nama di field Nama File
            cy.get('input[type=file]').selectFile('cypress/uploads/Test.pdf') // Unggah file di direktori cypress/uploads
            cy.contains('Simpan').click()
            // cy.get('.alert').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Mengubah nama salah satu file
    it('Adding a new guide file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.get(':nth-child(1) > .links > .btn-warning').click() // klik ikon pensil pada file paling atas
            // cy.get('.panel-title').should('have.text', ' Ubah File Panduan')
            cy.get('.panel-title').and('contain', 'Ubah File Panduan') // assertion bahwa ada elemen yang memuat tulisan "Ubah File Panduan"
            cy.get('.form-control').clear().type('Test upload pakai Cypress')
            cy.contains('Simpan').click()
        })
    })

    // Checklist salah satu file panduan
    it('Opens File Panduan sub menu', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Registrasi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').should('have.text', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            // cy.get(':nth-child(1) > :nth-child(3) > .change-status > img').click() // ceklis status aktif file panduan
            cy.get(':nth-child(1) > .links > .btn-danger').click()
            cy.get('h2').contains('Menghapus File Panduan')
        })
    })

    // Unggah file Excel ke File Panduan
    it('Adding an Excel file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.contains('Tambah').click()
            cy.get('.form-control').type('Test upload file menggunakan Cypress keenam') // Input nama di field Nama File
            const fileName = "TarifPendaftaran-Gel8-Reguler-IPS.xls";
            cy.fixture(fileName, "binary")
              .then(Cypress.Blob.binaryStringToBlob)
              .then((fileContent) => {
                cy.get("input[type=file]").attachFile({
                    fileContent,
                    fileName,
                    mimeType: "app;ication/vnd.openxmlformats-officedocument.spreadsheet.sheet",
                    encoding: "utf-8"
                })
              })
            // cy.get('[type="file"]').selectFile('cypress/uploads/Test.pdf') // Unggah file di direktori cypress/uploads
            cy.contains('Simpan').click()
            // cy.get('.alert').and('contain', 'Penambahan Data Berhasil Dilakukan')
        })
    })

    // Menghapus salah satu file panduan
    it.only('Adding a new guide file', () => {
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.get(':nth-child(7) > [href="#"] > .px-nav-label').click() // klik menu Admisi
            cy.get('.px-open > .px-nav-dropdown-menu > :nth-child(1) > .xhr > .px-nav-label').click() // klik sub menu File Panduan
            cy.get('h1').and('contain', 'File Panduan') // assertion bahwa elemen h1 mengandung tulisan File Panduan

            cy.get(':nth-child(1) > .links > .btn-danger').click() // Klik tombol hapus pada file panduan pertama
            cy.get('h2').contains('Menghapus File Panduan') // assertion

            cy.get('.btn-danger').click() // klik tombol Hapus
            cy.get('.alert').and('contain', 'Penghapusan Data Berhasil Dilakukan')
        })
    })
    
})