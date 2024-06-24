/// <reference types="cypress" />

import Base_OP from "./Base_PO";

class Homepage_OP extends Base_OP{
    navigateToHomepage() {
        super.navigate("");
    }

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_InSameTab('#contact-us');
    }

    clickOn_Login_Portal_Button() {
        cy.clickAndOpenLink_InSameTab('#login-portal');
    }
}
export default Homepage_OP;