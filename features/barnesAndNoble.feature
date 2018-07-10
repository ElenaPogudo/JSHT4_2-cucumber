Feature: barnesAndNoble Testing
  I would like to found some books and its prises with sales

  Scenario Outline: Checking prises for some books
    Given The main page is open
    And Stupid add is close
    When I move to books link
    And I click on top 100 link
    And I scroll down to "<number of book>" book
    And I open book link
    And I add book to my shopping cart
    Then I should see old prices and % I save
    And I should see that new price is "<price>"

    Examples:
      | number of book | price |
      | first          | 20.80 |
      | second         | 12.19 |
      | third          | 17.99 |