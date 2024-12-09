Feature: Filtering card by name
 Scenario: User filters card
  Given user is on a specific board
  And has an existing list with atleast one card
  When user clicks filter button
  And types the specified name that the card has
  Then user should only see the card with the specified name
