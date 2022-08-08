/// <reference types="Cypress" />

describe('landing page VTC',function()
    {
    it('url testing',function(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
         cy.url().should('include','BankingProject')
        })
        it('verify heading & buttons',function(){
            cy.get('.mainHeading').should('be.visible').should('contain','XYZ Bank')
            cy.contains('Customer Login').should('be.visible')
            cy.contains('Bank Manager Login').should('be.visible')
            })   
    })
 describe('landing page FTC',function()
    {
    it('checking functionality of costmer login button',function(){
        cy.contains('Customer Login').click()
        cy.get('label').should('be.visible').should('contain','Your Name')
      
        })
         
    })
describe('login page1 for custmer VTC',function()
   {
    it('verifying dropdown for select username',function(){
        cy.get('label').should('be.visible').should('contain','Your Name')
        cy.get('#userSelect').should('be.visible')
      
        })
        
         
    })
describe('login page1 FTC',function()
    {
        it('checking the functionailty dropdown for select username',function(){
            cy.get('label').should('be.visible').should('contain','Your Name')
            cy.get('#userSelect').select('Harry Potter')
            cy.get('form.ng-valid > .btn').should('be.visible').should('contain','Login').should('be.enabled').click()
            cy.get('.borderM > :nth-child(1) > strong').should('be.visible').should('contain','Welcome Harry')
          
            })
        })
 describe('Home page for user VTC',function()
    {
        it('verifying details on home page',function(){

           cy.get('.borderM > :nth-child(1) > strong').should('be.visible').should('contain','Welcome Harry')  //welcome user meassge
           cy.get('.logout').should('be.visible').should('contain','Logout').should('be.enabled')               // logout button
           cy.get('.home').should('be.visible').should('contain','Home').should('be.enabled')                   // logout button
           cy.get('[ng-class="btnClass1"]').should('be.visible').should('contain','Transaction').should('be.enabled')  //transaction button
           cy.get('[ng-class="btnClass2"]').should('be.visible').should('contain','Deposit').should('be.enabled')      //deposit button
           cy.get('[ng-class="btnClass3"]').should('be.visible').should('contain','Withdrawl').should('be.enabled')   //Withdrawl button
           cy.get('#accountSelect').should('be.enabled').should('be.visible')
           cy.get('.borderM > :nth-child(3)').should('contain','Account Number')
                                        .should('contain','Currency')
                                        .should('contain','Balance')
                                        
          }) 
        })
 describe('Home page for user FTC',function()
        {
            it('verify dropdown for selection account number with valid data',function(){
                cy.get('#accountSelect').select('1005')
                cy.get('.borderM > :nth-child(3) > :nth-child(1)').should('contain','1005')
                cy.get('#accountSelect').select('1006')
                cy.get('.borderM > :nth-child(3) > :nth-child(1)').should('contain','1006')

              }) 
              it('verify functionality of Transaction button',function(){
                cy.get('[ng-class="btnClass1"]').click()
                cy.get('tr > :nth-child(1)').should('be.visible').should('contain','Date-Time')
                cy.get('tr > :nth-child(2)').should('be.visible').should('contain','Amount')
                cy.get('tr > :nth-child(3)').should('be.visible').should('contain','Transaction Type')
                cy.go(-1)
                cy.wait(2000)
              })
              it('verify functionality of Deposit button',function(){
                cy.get('[ng-class="btnClass2"]').click()
                cy.get('label').should('be.visible').should('contain','Amount to be Deposited')
                cy.wait(2000)
              })
              it('verify functionality of Withdrawl button',function(){
                cy.get('[ng-class="btnClass3"]').click()
                cy.get('label').should('be.visible').should('contain','Amount to be Withdrawn')
              })
            })  
 
 describe('deposit page for user VTC',function()
            { 
                it('verifying details on Deposit page',function(){
                    cy.get('[ng-class="btnClass2"]').click()
                    cy.get('label').should('be.visible').should('contain','Amount to be Deposited')
                    cy.get('.form-control').should('be.visible').should('be.enabled')
                    cy.get('form.ng-pristine > .btn').should('be.visible').should('be.enabled').should('contain','Deposit')
                })
                  })
 describe('deposit page for user FTC',function()
                  { 
                      it('verifying functinality of amount input box with invalid data',function(){
                        cy.get('.form-control').type('gfsg')
                        cy.get('form.ng-pristine > .btn').click()
                      })
                      it('verifying functinality of amount input box with blank data',function(){
                        cy.get('.form-control')
                        cy.get('form.ng-pristine > .btn').click()
                      })
                      it('verifying functinality of amount input box with valid data',function(){
                        cy.get('.form-control').type('10000')
                        cy.get('form.ng-dirty > .btn').click()
                        cy.get('.error').should('be.visible').should('contain','Deposit Successful')
                        cy.get('.form-control').should('be.visible').should('be.enabled')
                      })
                        })  
                                                               
 describe('Withdrawal page for user VTC',function()
             { 
              it('verifying details on withdrawal page',function(){
             cy.get('[ng-class="btnClass3"]').click()
             cy.get('label').should('be.visible').should('contain','Amount to be Withdrawn')
             cy.get('.form-control').should('be.visible').should('be.enabled')
             cy.get('form.ng-pristine > .btn').should('be.visible').should('be.enabled').should('contain','Withdraw')                           
                        
          })
    })
 describe('Withdrawl page for user FTC',function()
    { 
        it('verifying functinality of amount input box with invalid data',function(){
          cy.get('.form-control').type('gfsg')
          cy.get('form.ng-pristine > .btn').click()
        })
        it('verifying functinality of amount input box with blank data',function(){
          cy.get('.form-control')
          cy.get('form.ng-pristine > .btn').click()
        })
        it('verifying functinality of amount input box with valid data',function(){
          cy.get('.form-control').type('100')
          cy.get('form.ng-dirty > .btn').click()
          cy.get('.error').should('be.visible').should('contain','Transaction successful')
          cy.get('.form-control').should('be.visible').should('be.enabled')
         cy.wait(1000)
        })
          })   
            
 describe('Transation page for user VTC',function()
            { 
                it('verifying details on Transction page',function(){
                    cy.contains('Transaction').click()
                    cy.get('#anchor0 > :nth-child(3)').should('contain','Credit')
                    cy.get('.home')
                  })
            })                             
          
            