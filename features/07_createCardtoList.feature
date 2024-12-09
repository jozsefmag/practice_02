Feature: Adding a new card to a list
 Scenario: User adds a card to an existing list
  Given user is at a selected board 
  And has an existing list
  When user clicks the Add a card button 
  And user adds a title for the list
  And user clicks Add card button
  Then user should see a new card appear