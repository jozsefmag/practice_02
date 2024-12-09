const { Given, When, Then } = require('@wdio/cucumber-framework');
const { loginTrello } = require('../helper/loginTrello')//login function in a different js file

Given('user is at Trello\'s home screen', async () => {
    await loginTrello()//sign in steps being executed
});

When('user clicks Create new board button', async () => {
    await $("div[class='board-tile mod-add']").click();
});

When('enters a title for the board', async () => {
    await $("input[data-testid='create-board-title-input']").setValue('New Board');
});

When('clicks on Create', async () => {
    await $("button[data-testid='create-board-submit-button']").click();
});

Then('the new board should appear on the dashboard', async () => {
    const boardNameDisplay = $("h1[data-testid='board-name-display']");
    await expect(boardNameDisplay).toHaveText('New Board')
});