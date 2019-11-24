/// <reference types="Cypress" />

import PracticePace from '../support/pages/PracticePage'

describe('My Third Test', function()
{
    const practicePage = new PracticePace;

    it('My third test case', function()
    {
        cy.visit(Cypress.env('urlQaClickAcademy'));

        //Check checkbox(es) or radio(s). This element must be an <input> with type checkbox or radio.
        practicePage.getCheckBoxoption1().check().should('be.checked')
        .and('have.value','option1'); //-->Make sure that checkbox is checked.
                                    //--> For behaviour we use be.
        
        /*
        behavioral --> be.
        comparisoin --> have.
        */

        //unckeck
        practicePage.getCheckBoxoption1().uncheck().should('not.be.checked');

        //select two checkboxes.
        practicePage.getCheckBox().check(['option2', 'option3']);
    })
})