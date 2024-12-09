Feature: Editing the workspace name
 Scenario: User edits the workspace
  Given user is at the workspace settings
  When the user clicks the Edit icon option
  And adds a new name for the workspace
  And clicks on Save
  Then user should see the workspace with an updated name