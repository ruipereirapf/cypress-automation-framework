/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_Portal_PO from "../page_objects/login_portal_PO";

const loginPage = new Login_Portal_PO;
let stub;

Given('I navigate to the WebdriverUniversity login page', () => {
    loginPage.navigateTo_Login_Page();
})


When ('I type a username {}', (username) => {
    //cy.get('#text').type(username);
    loginPage.type_Username(username);
})

When ('I type a password {}', (password) => {
    //cy.get('#password').type(password);
    loginPage.type_Password(password);
})

When('I click on the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    
    //cy.get('#login-button').click();
    loginPage.clickOn_Login_Button();
})

When ('I should be presented with a alertbox with text {string}', (message) => {
    // cy.on('window:alert', (txt) => {
    //     expect(txt).to.contains(message);
    // })
    expect(stub).to.been.calledWith(message);
})