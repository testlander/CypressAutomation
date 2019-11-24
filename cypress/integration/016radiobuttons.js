/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('Mt Sixth Test', function()
{

    const practicePage = new PracticePage;

    it('My sixth test case', function()
    {
        cy.visit(Cypress.env('urlAutomation'));

        practicePage.getRadioButton2().check().should('be.checked');
    })
})