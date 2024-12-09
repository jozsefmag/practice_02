Feature: Trello tasks
 Scenario: User successfully signs in
  Given user is on the Trello's sign-in page
  When user enters a valid email 
  And user enters a valid password
  And clicks Log in button
  Then user should be at the home screen
  And user should see Trello boards

