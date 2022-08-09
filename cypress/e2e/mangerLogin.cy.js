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
            cy.get('form.ng-pristine > .btn').click()
             })
       it(' check the functionality Add costmer page with valid data',function(){
            cy.get('[ng-class="btnClass1"]').click()
            cy.get(':nth-child(1) > .form-control').type('Suraj')
         cy.get(':nth-child(2) > .form-control').type('Chavan')
         cy.get(':nth-child(3) > .form-control').type('4003')
         cy.get('form.ng-dirty > .btn').click()
         cy.get('[ng-class="btnClass3"]').click()
         cy.get(':nth-child(6) > :nth-child(1)').should('be.visible').should('contain','Suraj')

           })
        })  
describe('Open Account  page VTC',function()
        {
         it('verify details on open account page',function(){  
          cy.get('[ng-class="btnClass2"]') .click()
          cy.get(':nth-child(1) > label').should('be.visible').should('contain','Customer')
          cy.get(':nth-child(2) > label').should('be.visible').should('contain','Currency')
          cy.get('form.ng-pristine > button').should('be.visible').should('contain','Process').should('be.enabled')
          cy.get(':nth-child(1) > .form-control').should('be.visible').should('be.enabled')
        cy.get(':nth-child(2) > .form-control').should('be.visible').should('be.enabled')
        
        })
      }) 
 describe('Open account page FTC',function()
      {
        it(' check the functionality open account page with blank data',function(){ 
          cy.get('[ng-class="btnClass2"]').click()
          cy.get('form.ng-pristine > button').click()
          
        })
        it(' check the functionality open account page with valid  data',function(){ 
          cy.get('[ng-class="btnClass2"]').click()
          cy.get('#userSelect').select('Suraj Chavan')
          cy.get('#currency').select('Dollar')
          cy.get('form.ng-dirty > button').click()
          cy.get('[ng-class="btnClass3"]').click()
          cy.wait(1000)
          cy.get(':nth-child(6) > :nth-child(4)').scrollIntoView()
          cy.get(':nth-child(6) > :nth-child(4)').should('contain','1016')
        })
      })
 describe('Customers page VTC',function()
        {
         it('verify details of Customers page',function(){  
          cy.go(-1)
          cy.get('[ng-class="btnClass3"]') .click()
          cy.get('thead > tr > :nth-child(1)').should('be.visible').should('contain','First Name')
          cy.get('thead > tr > :nth-child(2)').should('be.visible').should('contain','Last Name')
          cy.get('thead > tr > :nth-child(3)').should('be.visible').should('contain','Post Code')
          cy.get('thead > tr > :nth-child(4)').should('be.visible').should('contain','Account Number')
          cy.get('thead > tr > :nth-child(5)').should('be.visible').should('contain','Delete Customer')
          cy.get(':nth-child(1) > :nth-child(5) > button').should('be.visible').should('contain','Delete').should('be.enabled')
          cy.get('.form-control').should('be.visible').should('be.enabled')
        })
      }) 
describe('Customers page FTC',function()
      {
        it(' check the functionality of serch costomers',function(){ 
          cy.get('.form-control').type('Suraj')
          cy.get('tr.ng-scope > :nth-child(1)').should('contain','Suraj')
          cy.wait(1000)
           cy.go(-1)
           cy.go(1)
          
          
        })
        it(' check the functionality of serch and delete costomers',function(){ 
          cy.get('.form-control').type('Suraj')
          cy.wait(1000)
          cy.get(':nth-child(5) > button').click()
          
          
        })
        
      })            
      