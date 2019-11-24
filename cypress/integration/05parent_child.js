/// <reference types="Cypress" />

import SeleniumPracticePage from '../support/pages/SeleniumPractisePage'

describe('My Second Test Suite', function() {

    const seleniumPracticePage = new SeleniumPracticePage;

    it('My Second Test Case', function() {
        cy.visit(Cypress.env('urlSelenium'));

        seleniumPracticePage.getSearchText().type('ca');
        cy.wait(2000);

        seleniumPracticePage.getProductsVisible().should('have.length', 4);

        //Parent child chaining
        seleniumPracticePage.getProducts().as('productLocator') //--> Assign an alias for later use.
        cy.get('@productLocator').find('.product').should('have.length',4);
        //want to click second of four products.
        //Iterating over the array of web elements using each.
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('Hello world..') //manually you are telling that this step shoul execute
                                         //after resolving the promise of step number 16.
        })        


    })
  })