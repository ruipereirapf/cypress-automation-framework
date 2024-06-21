Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter a email
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I enter a specific email "sarahwoods@email.com"
        And I type a specific word "hello123" and a number 6788 within the comment field
        And I click on the submit button
        Then I should be presented with a successful submission message

    Scenario Outline: Validate Contact Us Page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a email adress '<email>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with headet text '<message>'

        Examples:
            | firstName | lastName | email                | comment                 | message                      |
            | John      | Jones    | john_jones@email.com | Hello, how are you?     | Thank You for your Message!  |
            | Mia       | Carter   | mia_carter@email.com | Test123 Test123         | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson         | Do you create websites? | Error: Invalid email address |
