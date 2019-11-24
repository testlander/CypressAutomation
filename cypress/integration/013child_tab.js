/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('My 8th Test', function()
{

    const practicePage = new PracticePage;

    it('My 8th test case', function()
    {
        cy.visit(Cypress.env('urlQaClickAcademy'));

        //cypress have the ability to manipulate the DOM
        //remove target attribute by using jquery method removeAttr()
        practicePage.getOpenTab().invoke('removeAttr', 'target').click();
    })
})