Feature: Login

  Scenario Outline: E-Shop Application - Login valid credentials
    Given User launched eshop login page
    When User login with valid "<EmailID>" and "<Password>"
    Then User should login and be redirected to home page

  Examples:
    | EmailID               | Password |
    | tester@gmail.com     | testing |  

  # Scenario Outline: E-Shop Application - Login invalid Email
  #   Given User launched eshop login page
  #   When User login with invalid "<EmailID>" and valid "<Password>"
  #   Then User should see an error "<Message>" 

  # Examples:
  #   | EmailID               | Password      | Message |
  #   | wrongEmail@gmail.com  | testing       | No customer account found  |

  # Scenario Outline: E-Shop Application - Login invalid Password
  #   Given User launched eshop login page
  #   When User login with valid "<EmailID>" and invalid "<Password>"
  #   Then User should see an error "<Message>"

  # Examples:
  #   | EmailID               | Password      | Message |
  #   | tester@gmail.com      | wrongPassword | The credentials provided are incorrect |