Feature: Register

  Scenario Outline: E-Shop Application - Create New Account
    Given User launched eshop register page
    When User create account with "<FirstName>", "<LastName>", "BirthDay", "BirthMonth", "BirthYear", "<EmailID>" and "<Password>"
    Then User account should get created

  Examples:
      | FirstName   | LastName  | BirthDay| BirthMonth  | BirthYear | EmailID   | Password |
      | Fabrizio    | Otranto   | 31      | October     | 1995      | testing   | Password |  