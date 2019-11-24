/// <reference types="Cypress" />

import SeleniumPracticePage from '../support/pages/SeleniumPractisePage'

describe('My First Test', function()
{
    const seleniumPracticePage = new SeleniumPracticePage;
    
    it('My first test case', function()
    {
         cy.visit(Cypress.env('urlSelenium'));
    
        /*
        This code is not working, cypress confuses here.
        We have to manually handle the promise.
        const logo = cy.get('.brand'); --> This returns promise, you can not work on that.
        cy.log(logo.text());
        */
       //Correct code..Manually handling promise..By resolving it, using then()..
       //This is to print in logs
       seleniumPracticePage.getBrand().then(function(logoElement)
       {
           cy.log(logoElement.text());
       })

       //assert if logo text is correctly displayed
       //Handing Async promises with Cypress
       seleniumPracticePage.getBrand().should('have.text','GREENKART')

       /*
        --> text() is not a cypress method.
        --> cy.get('.brand').text() is also does not work.
        --> cypress supports jquery methods and text() is a jquery method.
        There is no inbuild method in cypress to grap the text.
        Non cypress commands cannot resolve promise by themselves. We need to manuallyresolveit by then()
       */

    })
})