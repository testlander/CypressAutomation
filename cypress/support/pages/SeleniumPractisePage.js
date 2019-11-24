class SeleniumPractisePage
{
    getSearchText() {
        return cy.get('.search-keyword');
    }

    getProductsVisible() {
        return cy.get('.product:visible');
    }

    getProducts() {
        return cy.get('.products');
    }

    getBrand() {
        return cy.get('.brand');
    }

    getAddToChart() {
        return cy.get('.cart-icon > img');
    }
}

export default SeleniumPractisePage;