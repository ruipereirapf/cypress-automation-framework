import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When ('I type a first name', () => {
    cy.get('[name="first_name"]').type('Joe');
})

When ('I type a last name', () => {
    cy.get('[name="last_name"]').type('Doe');
})

When ('I enter a email', () => {
    cy.get('[name="email"]').type('joedoe@email.com');
})

When ('I type a comment', () => {
    cy.get('textarea[name="message"]').type('Random comment');
})

When ('I click on the submit button', () => {
    cy.get('[type="submit"]').click();
    
})

Then ('I should be presented with a successful submission message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!');
})

Then ('I should be presented with a unsuccessful submission message', () => {
    cy.get('body').contains('Error: Invalid email address');
})


When ('I type a specific first name {string}', (firstName) => {
    cy.get('[name="first_name"]').type(firstName);
})

When ('I type a specific last name {string}', (lastName) => {
    cy.get('[name="last_name"]').type(lastName);
})

When ('I enter a specific email {string}', (email) => {
    cy.get('[name="email"]').type(email);
})

When ('I type a specific word {string} and a number {int} within the comment field', (word, number) => {
    cy.get('textarea[name="message"]').type(word + " " + number);
})