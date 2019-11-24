/// <reference types="Cypress" />

describe('My First Test', function()
{
    it('My first test case', function()
    {
         cy.visit(Cypress.env('urlSelenium'));

        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //selenium get() hits url in browser, cypress get() acts like findElement of Selenium
        cy.get('.product:visible').should('have.length', 4);

        //Parent child chaining
        cy.get('.products').as('productLocator') //--> Assign an alias for later use.
        cy.get('@productLocator').find('.product').should('have.length',4);
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('Hello world..') //manually you are telling that this step shoul execute
                                         //after resolving the promise of step number 20.
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

        /*
        This code is not working, cypress confuses here.
        We have to manually handle the promise.
        const logo = cy.get('.brand'); --> This returns promise, you can not work on that.
        cy.log(logo.text());
        */
       //Correct code..Manually handling promise..By resolving it, using then()..
       //This is to print in logs
       cy.get('.brand').then(function(logoElement)
       {
           cy.log(logoElement.text());
       })

       //assert if logo text is correctly displayed
       cy.get('.brand').should('have.text','GREENKART')

       /*
        --> text() is not a cypress method.
        --> cy.get('.brand').text() is also does not work.
        --> cypress supports jquery methods and text() is a jquery method.
        There is no inbuild method in cypress to grap the text.
        Non cypress commands cannot resolve promise by themselves. We need to manuallyresolveit by then()
       */

    })
})