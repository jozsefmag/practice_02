const { Given, When, Then } = require('@wdio/cucumber-framework');
const { loginTrello } = require('../helper/loginTrello')

Given('user is at the workspace settings', async () => {
    await loginTrello()
    await $("div[title='New Board']").click()
    await $("button[data-testid='admin-settings-dropdown-button']").click()
    await $("[data-testid='popover-settings-button']").click()
});

When('the user clicks the Edit icon option', async () => {
    await $("span[data-testid='EditIcon']").click();
});

When('adds a new name for the workspace', async () => {
    await $('#displayName').setValue('New Workspace Name');
});

When('clicks on Save', async () => {
    await $("button[class='_wJD3QSFJjW4Pb bxgKMAm3lq5BpA SdamsUKjxSBwGb SEj5vUdI3VvxDc']").click();
});

Then('user should see the workspace with an updated name', async () => {
    const workspaceNameDisplay = $("h2[class='SiP6d2d_8FAAkC']");
    await expect(workspaceNameDisplay).toHaveText('New Workspace Name');
});
