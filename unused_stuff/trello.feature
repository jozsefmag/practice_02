Scenario: User succesfull sign up
  Given user is on the Trello's sign up page
  When user enters a valid email address, 
  And user enters whole name, 
  And user enters a valid password
  And clicks Continue button
  Then user should see the home screen

Feature: Sign in

Scenario: User successfully signs in
  Given user is on the Trello's sign in page
  When user enters a valid email 
  And user enters a valid password
  And clicks Log in button
  Then user should be at the home screen
  And user should see Trello boards

Feature: Edit user profile name and bio

Scenario: User Updates profile information
  Given user is on the profile and visibility settings page
  When the user updates username and the bio
  And clicks Save button
  Then user should see the updated profile information

Feature: Creating a new board

Scenario: User creates a new board
  Given user is at Trello's home screen
  When user clicks Template board button
  And clicks on Create board from template
  And enters a title for the board
  And clicks on Create
  Then the new board should appear on the dashboard

Feature:Searching for a board by its name

Scenario: User searches for a specific board
  Given user is at Trello's user workspace page
  When user clicks on search
  And user types the board name 
  Then the board with the specified name should appear

Feature: Creating a list

Scenario: User adds a new list 
  Given user is at a specific board
  When user clicks Add another list button
  And user adds a name for the list
  And user clicks on Add list button
  Then user should see a new list unit

Feature: Adding a new card to a list

Scenario: User adds a card to an existing list
  Given user is at a specific board 
  And has an existing list
  When user clicks the Add a card button 
  And user adds a title for the list
  And user clicks Add card button
  Then user should see a new card appear

Feature: Filtering card by a specific label

Scenario: User filters card
  Given user is on a specific board
  And has an existing list
  And there's a card on the list with a specified label
  When user clicks filter button
  And selects the specified label that the card has
  Then user should only see the card with the specified label

Feature: Editing the workspace name

Scenario: User edits the workspace
  Given user is at the workspace settings
  When the user clicks the Edit icon option
  And adds a new name for the workspace
  And clicks on Save
  Then user should see the workspace with an updated name