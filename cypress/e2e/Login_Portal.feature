@login @regression
Feature: WebdriverUniversity - Login Portal Page

    Scenario Outline: Validate Valid and Invalid Login credentials
        # Given I navigate to the WebdriverUniversity homepage
        # When I click on the login portal button
        Given I navigate to the WebdriverUniversity login page
        When I wait for 0 seconds
        And I type a username <username>
        And I type a password <password>
        And I click on the login button
        Then I should be presented with a alertbox with text '<message>'

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | 123          | validation failed    |
            | 123       | password     | validation failed    |
