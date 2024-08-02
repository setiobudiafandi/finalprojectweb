Feature: Login

    Scenario: Login with correct credentials
    Given I am on the KasirAja login page
    When I login with the correct credentials
    Then I could login successfully

    @negative
    Scenario: Login with incorrect password
    Given I am on the KasirAja login page
    When I login with the incorrect password
    Then I could see error alert