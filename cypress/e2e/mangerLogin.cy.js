/// <reference types="Cypress" />

describe('landing page FTC',function()
    {   
        it('url testing',function(){
            cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
             cy.url().should('include','BankingProject')
            })
        it('checking functionality of manager login button',function(){
            cy.contains('Manager Login').click()
            cy.get('[ng-class="btnClass1"]').should('be.visible').should('contain','Add Customer')
            cy.get('[ng-class="btnClass2"]').should('be.visible').should('contain','Open Account')
            cy.get('[ng-class="btnClass3"]').should('be.visible').should('contain','Customer')

            })
    })
describe('login page1 for manager VTC',function()
   {
    it('verify heading & buttons',function(){
        cy.get('[ng-class="btnClass1"]').should('be.visible').should('contain','Add Customer')
        cy.get('[ng-class="btnClass2"]').should('be.visible').should('contain','Open Account')
        cy.get('[ng-class="btnClass3"]').should('be.visible').should('contain','Customer')
        })
    })
 describe('login page1 for manager FTC',function()
    {
     it('check functionility of buttons',function(){
        cy.get('[ng-class="btnClass1"]').click()
        cy.get('form.ng-pristine > .btn').should('contain','Add Customer')
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('form.ng-pristine > button').should('contain','Process')
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('thead > tr > :nth-child(1)').should('contain','First Name')
        cy.get('thead > tr > :nth-child(5)').should('contain','Delete Customer')
       
         })
     })
describe('Add costomer page VTC',function()
     {
      it('verify details on add costmer page',function(){
        cy.get('[ng-class="btnClass1"]').click()
        cy.get(':nth-child(1) > label').should('be.visible').should('contain','First Name')
        cy.get(':nth-child(2) > label').should('be.visible').should('contain','Last Name')
        cy.get(':nth-child(3) > label').should('be.visible').should('contain','Post Code')
        cy.get('form.ng-pristine > .btn').should('be.visible').should('contain','Add Customer').should('be.enabled')
        cy.get(':nth-child(1) > .form-control').should('be.visible').should('be.enabled')
        cy.get(':nth-child(2) > .form-control').should('be.visible').should('be.enabled')
        cy.get(':nth-child(3) > .form-control').should('be.visible').should('be.enabled')
          })
      }) 
 describe('Add costomer page FTC',function()
      {
        it(' check the functionality Add costmer page with blank data',function(){
            cy.get('[ng-class="btnClass1"]').click()
            
    //         cy.get('form.ng-dirty > .btn').click()
   
              })
    //    it(' check the functionality Add costmer page with valid data',function(){
    //      cy.get('[ng-class="btnClass1"]').click()
    //      cy.get(':nth-child(1) > .form-control').type('Suraj')

    
    //      cy.get(':nth-child(2) > .form-control').type('Chavan')
    //      cy.get(':nth-child(3) > .form-control').type('4003')
    //      cy.get('form.ng-dirty > .btn').click()

    //        })
       })            