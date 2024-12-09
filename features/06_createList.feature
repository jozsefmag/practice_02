Feature: Creating a list
 Scenario: User adds a new list 
  Given user is at a specific board
  When user clicks Add another list button
  And user adds a name for the list
  And user clicks on Add list button
  Then user should see a new list unit