/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('My 10th Test', function()
{

    const practicePage = new PracticePage;

    it('My 10th test case', function()
    {
        cy.visit(Cypress.env('urlQaClickAcademy'));

        practicePage.getOpenTab().invoke('removeAttr', 'target').click();

        //Get the current URL of the page that is currently active.
        cy.url().should('include', 'qaclickacademy');

        cy.go('back');
        
    })
})