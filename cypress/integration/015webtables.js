/// <reference types="Cypress" />

import PracticePage from '../support/pages/PracticePage'

describe('My Second Test Suite', function() 
{
 
    const practicePage = new PracticePage;

it('My FirstTest case',function() {
 
//Check boxes
cy.visit(Cypress.env('urlAutomation'));
 
practicePage.getWebTableElement().each(($e1, index, $list) => {
    const text=$e1.text();
    if(text.includes("Python"))
    {
 
        //You can traverse to sibling with next() and it works only on get().
        practicePage.getWebTableElement().eq(index).next().then(function(price)
        {
         const priceText= price.text()
         expect(priceText).to.equal('26')
        })
    }
})
})
})