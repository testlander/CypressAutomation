/// <reference types="Cypress" />

/*
What are describe, it, and expect?
All of these functions come from Bundled Tools that Cypress bakes in.
describe and it come from --> Mocha
expect comes from --> Chai
=========================================================
describe --> test suite
it --> test case
*/

describe('My First Test Suite', function() {
    it('My First Test Case', function() {
        cy.visit(Cypress.env('urlSelenium'));
    })
  })