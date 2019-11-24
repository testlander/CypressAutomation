/// <reference types="Cypress" />

import PracticePage from '../../support/pages/PracticePage'

//1st method: --> remove target attribute.
//2nd method: --> grap href attribute
//cypress is not supporting cross domain.

describe('Handling Child windows using Cypress', function()
{

    const practicePage = new PracticePage;

    it('Handling Child windows test case', function()
    {
        cy.visit(Cypress.env('urlAutomation'));

        practicePage.getOpenTab().then(function(e1)
        {
            const url = e1.prop('href');
            cy.log(url);
            cy.visit(url);
            //cypress expects rahulshettyacademy.com/seleniumpractice
            //new domain is qaclickacademy.com
/*
CypressError: cy.visit() failed because you are attempting to visit a second unique domain.
You may only visit a single unique domain per test.
Different subdomains are okay, but unique domains are not.
The previous domain you visited was: 'https://rahulshettyacademy.com'
You're attempting to visit this new domain: 'http://www.qaclickacademy.com'
You may need to restructure some of your code to prevent this from happening.
https://on.cypress.io/cannot-visit-second-unique-domain
*/
        })
    })

    it('First Method', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        practicePage.getOpenTab().invoke('removeAttr', 'target').click();
    })
})