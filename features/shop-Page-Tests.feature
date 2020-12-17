@shopPageTests
Feature: This feature will make sure that the shop page is navigable and usable.

Scenario: User navigates to shop page
    Given I am on the 'home' page
    When I navigate to Deals
    Then the user should be on the 'https://www.sky.com/shop/offers' page
 
# Scenario: User sees tiles on the shop page
#     Given I am on the 'home' page
#     When I try to sign in with invalid credentials
#     Then I should see a text saying that 'Sorry, we did not recognise either your username or password'

# Scenario: User sees a list of offers on the latest offers page
#     Given I am on the 'https://www.sky.com/shop/' page
#     Then I see a list of offers with a price to it