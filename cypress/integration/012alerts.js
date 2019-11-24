/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('My 7th Test', function()
{

    const practicePage = new PracticePage;

    it('My 7th Test Case', function()
    {
        cy.visit(Cypress.env('urlAutomation'));

        practicePage.getAlertButton().click();
        //cypress auto accepts alerts and pop ups
        //cypress automatically handles the alert
        practicePage.getConfirmButton().click();
        //cypress automatically handles the confirm alert

        //cypress have capability browser events. window:alert is the event which get fired on alert open.
        //so you 
        //window:alert
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    })
})