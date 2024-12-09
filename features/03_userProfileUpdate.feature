Feature: User updates profile name and bio
 Scenario: User Updates profile information
  Given user is on the profile and visibility settings page
  When the user updates username and the bio
  And clicks Save button
  Then user should see the updated profile information