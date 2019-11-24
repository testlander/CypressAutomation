/// <reference types="Cypress" />

import SeleniumPracticePage from '../support/pages/SeleniumPractisePage'

describe('My Second Test', function()
{
    const seleniumPracticePage = new SeleniumPracticePage;

    it('My second test case', function()
    {
         cy.visit(Cypress.env('urlSelenium'));

        seleniumPracticePage.getSearchText().type('ca');
        cy.wait(2000);

        seleniumPracticePage.getProducts().as('productLocator');
        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textValue = $el.find('h4.product-name').text();
            if(textValue.includes('Cashews'))
            {
                $el.find('button').click();
            }
        })

        seleniumPracticePage.getAddToChart().click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();


    })
})