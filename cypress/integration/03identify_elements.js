/// <reference types="Cypress" />

import SeleniumPracticePage from '../support/pages/SeleniumPractisePage'

/*
cypress only supports css selector
css selector:
1. id			==> #idName; tagName#idName
2. className	==> .className; tagName.className
3. customized with any attribute	==> tagName[attribute='value']
4. traverse parent to child	
	with tagnames		==> tagName1 tagName2
	with any attributes	==> tagName1[attribute='value'] tagName2
 */
//selenium get() hits url in browser, cypress get() acts like findElement of Selenium
//cy.get() == driver.findElement()

describe('My Second Test Suite', function() {

    const seleniumPracticePage = new SeleniumPracticePage;

    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data = data;
        })
    })

    it('My Second Test Case', function() {
        cy.visit(Cypress.env('urlSelenium'));

        seleniumPracticePage.getSearchText().type(this.data.text);
    })
  })