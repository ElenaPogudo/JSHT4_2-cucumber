Feature: recipeBook Testing
  I would like to found some recipe

  Scenario: Open recipe of Rose Penda
    Given The main page is open
    And I go a little down
    And I see Do you know link
    And I open Deserts
    And I go to Find Recipes
    And I go down
    And I open recipe
    Then I should see ingredients and recipe