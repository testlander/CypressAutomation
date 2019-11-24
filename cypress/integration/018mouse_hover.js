/// <reference types="Cypress" />

/*
Mouse hover events are not supported in cypress.
Alternatively use jquery or force click.
*/

describe('Handling Mouse Hover', function()
{
    it('Handling mouse hover test case', function()
    {
        cy.visit(Cypress.env('urlAutomation'));
        
        //1.Use jquery
        // cy.get('div.mouse-hover-content').invoke('show');
        // cy.contains('Top').click();
        // cy.url().should('include', 'top');

        //2.Force click
        //cypress finds hidden element and forces click.
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top');
    })
})