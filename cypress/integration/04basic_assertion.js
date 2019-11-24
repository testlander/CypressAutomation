/// <reference types="Cypress" />

import SeleniumPracticePage from '../support/pages/SeleniumPractisePage'

/*
 cy.get('.className:visible') ==> only visible elements should take into account.
*/

describe('My Second Test Suite', function() {

    const seleniumPracticePage = new SeleniumPracticePage;

    it('My Second Test Case', function() {
        cy.visit(Cypress.env('urlSelenium'));

        seleniumPracticePage.getSearchText().type('ca');
        cy.wait(2000);

        seleniumPracticePage.getProductsVisible().should('have.length', 4);
    })
  })