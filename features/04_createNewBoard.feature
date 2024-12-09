
Feature: Creating a new board
 Scenario: User creates a new board
  Given user is at Trello's home screen
  When user clicks Create new board button
  And enters a title for the board
  And clicks on Create
  Then the new board should appear on the dashboard