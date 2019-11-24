/// <reference types="Cypress" />

//fixtures --> to store test data
//integration --> to write test cases
//plugins --> are kind of listeners, inject customised options
//support --> write your customised commands, or reusable methods
//videos --> for every test run stores a video
//node_modules --> this will be created by --> npm install cypress
//cypress.json --> project configurations. cypress overwrites default configs according to this file.

describe('My Second Test Suite', function() {
    it('My Second Test Case', function() {
        cy.visit(Cypress.env('urlSelenium'));
    })
  })