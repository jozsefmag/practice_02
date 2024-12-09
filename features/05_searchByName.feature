Feature:Searching for a board by its name
 Scenario: User searches for a specific board
  Given user is at Trello's user workspace page
  When user clicks on search
  And user types the board name 
  Then the board with the specified name should appear
