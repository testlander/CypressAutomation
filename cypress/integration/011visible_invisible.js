/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('My Fifth Test', function()
{

    const practicePage = new PracticePage;

    it('My fifth test case', function()
    {
        cy.visit(Cypress.env('urlAutomation'));

        practicePage.getDisplayedField().should('be.visible');
        practicePage.getHideTextBox().click();
        practicePage.getDisplayedField().should('not.be.visible');
        practicePage.getShowTextBox().click();
        practicePage.getDisplayedField().should('be.visible');
    })
})