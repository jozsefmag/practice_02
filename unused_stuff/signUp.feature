
Scenario: User succesfull sign up
  Given user is on the Trello's sign up page
  When user enters a valid email address, 
  And user enters whole name, 
  And user enters a valid password
  And clicks Continue button
  Then user should see the home screen
