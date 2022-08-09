/// <reference types="Cypress" />

describe('intigration between costomer and manager users',function()
    {   
        it('url testing',function(){
            cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
             cy.url().should('include','BankingProject')
            })
            it('costomer user creation from manger user with valid data',function(){
                cy.get(':nth-child(3) > .btn').click() 
                cy.get('[ng-class="btnClass1"]').click()
                cy.get(':nth-child(1) > .form-control').type('salman')
                cy.get(':nth-child(2) > .form-control').type('khan')
                cy.get(':nth-child(3) > .form-control').type('444')
                cy.get('form.ng-dirty > .btn').click()
                cy.get('[ng-class="btnClass2"]').click()
                cy.get('#userSelect').select('salman khan')
                cy.get('#currency').select('Dollar')
                cy.get('form.ng-dirty > button').click()
                cy.get('.home').click()
                cy.get('.borderM > :nth-child(1) > .btn').click()
                cy.get('#userSelect').select('salman khan')
                cy.get('form.ng-valid > .btn').click()
                cy.get('.borderM > :nth-child(1) > strong').should('be.visible').should('contain','Welcome salman khan')
                })
        })
    