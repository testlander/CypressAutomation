class PracticePage
{
    getCheckBoxoption1() {
        return cy.get('#checkBoxOption1');
    }

    getCheckBox() {
        return cy.get('input[type="checkbox"]');
    }

    getSelectDrpDown() {
        return cy.get('select');
    }

    getAutoComplete() {
        return cy.get('#autocomplete');
    }

    getAutoCompleteItem() {
        return cy.get('.ui-menu-item');
    }

    getDisplayedField() {
        return cy.get('input[id="displayed-text"]');
    }

    getHideTextBox() {
        return cy.get('#hide-textbox');
    }

    getShowTextBox() {
        return cy.get('input[id="show-textbox"]');
    }

    getAlertButton() {
        return cy.get('input[id="alertbtn"]');
    }

    getConfirmButton() {
        return cy.get('input[value="Confirm"]');
    }

    getOpenTab() {
        return cy.get('#opentab');
    }

    getWebTableElement() {
        return cy.get('tr td:nth-child(2)');
    }

    getRadioButton2() {
        return cy.get('input[value="radio2"]');
    }

}

export default PracticePage