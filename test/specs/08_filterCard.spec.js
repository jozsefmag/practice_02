const { Given, When, Then } = require('@wdio/cucumber-framework');
const { loginTrello } = require('../helper/loginTrello')

Given('user is on a specific board', async () => {
    await loginTrello()
    await $("div[title='New Board']").click()
});

Given('has an existing list with atleast one card', async () => {
    await $("div[data-drop-target-for-external='true']").waitForDisplayed()
});


When('user clicks filter button', async () => {
    await $("button[data-testid='filter-popover-button']").click();
});

When('types the specified name that the card has', async () => {
    await $("input[class='nch-textfield__input lsOhPsHuxEMYEb lsOhPsHuxEMYEb']").setValue("New Card Item");
    
});

Then('user should only see the card with the specified name', async () => {
    const cardElements = await $$("[data-testid='card-name']");
    const invalidCards = [];
    
    for (const element of cardElements) {
        const text = await element.getText();
        if (text !== "New Card Item") {
            invalidCards.push(text);
        }
    }
    
    // Assert that there are no invalid cards
    expect(invalidCards.length).toBe(0);
    
});
