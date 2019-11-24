/// <reference types="Cypress" />

import SeleniumPracticePage from '../support/pages/SeleniumPractisePage'

describe('My First Test', function()
{

    const seleniumPracticePage = new SeleniumPracticePage;

    it('My first test case', function()
    {
        cy.visit(Cypress.env('urlSelenium'));

        seleniumPracticePage.getSearchText().type('ca');
        cy.wait(2000);
        
        seleniumPracticePage.getProductsVisible().should('have.length', 4);

        seleniumPracticePage.getProducts().as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length',4);
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('Hello world..');                               
        })
        
        //console.log("Hello world..")

        //Grabbing the text for validations using cypress text command
        // --> Here $e1 is resolved index(promise )
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textValue = $el.find('h4.product-name').text();
            if(textValue.includes('Cashewa')) {
                $el.find('button').click();
            } 
        })
    })
})