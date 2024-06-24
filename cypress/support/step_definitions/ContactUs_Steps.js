/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_US_PO";

const contactUs_Page = new Contact_Us_PO();

When ('I type a first name', () => {
    //cy.get('[name="first_name"]').type('Joe');
    contactUs_Page.type_FirstName('Joe');
})

When ('I type a last name', () => {
    //cy.get('[name="last_name"]').type('Doe');
    contactUs_Page.type_LastName('Doe')
})

When ('I enter a email', () => {
    //cy.get('[name="email"]').type('joedoe@email.com');
    contactUs_Page.type_Email('joedoe@email.com')
})

When ('I type a comment', () => {
    //cy.get('textarea[name="message"]').type('Random comment');
    contactUs_Page.type_Comment("Random comment");
})

When ('I click on the submit button', () => {
    //cy.get('[type="submit"]').click();
    contactUs_Page.clickOn_Submit_Button();
    
})

Then ('I should be presented with a successful submission message', () => {
    //cy.get('h1').should('have.text', 'Thank You for your Message!');
    contactUs_Page.validate_Submission_Header('Thank You for your Message!');
})

Then ('I should be presented with a unsuccessful submission message', () => {
    //cy.get('body').contains('Error: Invalid email address');
    contactUs_Page.validate_Submission_Header('Error: Invalid email address');
})


When ('I type a specific first name {string}', (firstName) => {
    //cy.get('[name="first_name"]').type(firstName);
    contactUs_Page.type_FirstName(firstName);
})

When ('I type a specific last name {string}', (lastName) => {
    //cy.get('[name="last_name"]').type(lastName);
    contactUs_Page.type_LastName(lastName);
})

When ('I enter a specific email {string}', (email) => {
    //cy.get('[name="email"]').type(email);
    contactUs_Page.type_Email(email);
})

When ('I type a specific word {string} and a number {int} within the comment field', (word, number) => {
    //cy.get('textarea[name="message"]').type(word + " " + number);
    contactUs_Page.type_Comment(word + " " + number)
})

When ('I type a first name {word} and a last name {string}', (firstName, lastName) => {
    //cy.get('[name="first_name"]').type(firstName);
    //cy.get('[name="last_name"]').type(lastName);
    contactUs_Page.type_FirstName(firstName);
    contactUs_Page.type_LastName(lastName);
})

When ('I type a email adress {string} and a comment {string}', (email, comment) => {
    //cy.get('[name="email"]').type(email);
    //cy.get('textarea[name="message"]').type(comment);
    contactUs_Page.type_Email(email);
    contactUs_Page.type_Comment(comment);
})

Then ('I should be presented with header text {string}', (message) => {
    //cy.get('body').contains(message);
    //cy.xpath('//h1 | //body').contains(message)
    contactUs_Page.validate_Submission_Header(message);
})