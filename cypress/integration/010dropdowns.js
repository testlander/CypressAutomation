/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('My Fourth Test', function()
{

    const practicePage = new PracticePage;

    it('My fourth test case', function()
    {
        cy.visit(Cypress.env('urlAutomation'));

        //Handling static dropdowns using select command with Cypress
        //Dropdowns --> 1. Static 2. Dynamic

        //Static Dropdown
        practicePage.getSelectDrpDown().select('option2').should('have.value', 'option2');

        //Dynamic Dropdown
        practicePage.getSelectDrpDown().type('Ind');

        practicePage.getAutoCompleteItem().each(($e1, index, $list) => {
            if($e1.text()==="Indonesia") {
                $e1.click();
            }
        })

        practicePage.getAutoComplete.should('have.value','Indonesia');
    })
})