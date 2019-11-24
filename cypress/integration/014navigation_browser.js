/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('My 9th Test', function()
{

    const practicePage = new PracticePage;

    it('My 9th test case', function()
    {
        cy.visit(Cypress.env('urlQaClickAcademy'));

        practicePage.getOpenTab().invoke('removeAttr', 'target').click();

        //Go back in browser's history
        cy.go('back');

        //Go forward in browser's history
        //cy.go('forward');
        
    })
})