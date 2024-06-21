/// <reference types="cypress" />
import { When } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When ('I type a username {}', (username) => {
    cy.get('#text').type(username);
})

When ('I type a password {}', (password) => {
    cy.get('#password').type(password);
})

When('I click on the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click();
})

When ('I should be presented with a alertbox with text {string}', (message) => {
    // cy.on('window:alert', (txt) => {
    //     expect(txt).to.contains(message);
    // })
    expect(stub).to.been.calledWith(message);
})