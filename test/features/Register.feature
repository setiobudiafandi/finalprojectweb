Feature: Register

    Scenario: Register with valid data
    Given I am on the KasirAja web page
    When I click ingin mencoba daftar button
    And I register with valid data
    Then I could register successfully

    Scenario: Register with invalid email
    Given I am on the KasirAja web page
    When I click ingin mencoba daftar button
    And I register with invalid email
    Then I could see the error popup