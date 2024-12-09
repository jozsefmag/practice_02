const { Given, When, Then } = require('@wdio/cucumber-framework');
const { loginTrello } = require('../helper/loginTrello')

Given('user is at a selected board', async () => {
    await loginTrello()
    await $("div[title='New Board']").click()
});

Given('has an existing list', async () => {
    const listNameDisplay = $("h2[data-testid='list-name']");
    await expect(listNameDisplay).toHaveText('New List')
});

When('user clicks the Add a card button', async () => {
    await $("button[data-testid='list-add-card-button']").click();
});

When('user adds a title for the list', async () => {
    await $("textarea[data-testid='list-card-composer-textarea']").setValue('New Card Item');
});

When('user clicks Add card button', async () => {
    await $("button[data-testid='list-card-composer-add-card-button']").click();
});

Then('user should see a new card appear', async () => {
    
    const cardElements = await $$("[data-testid='card-name']");
    
    // Filter elements to find one that contains the text "New Card Item"
    let newCardElement;
    for (const element of cardElements) {
        const text = await element.getText();
        if (text.includes("New Card Item")) {
            newCardElement = element;
            break;
        }
    }
    
    // Assert that the element exists
    expect(newCardElement).not.toBeNull(); // Ensure the element exists
    expect(newCardElement).not.toBeUndefined();

    // Wait for the element to be displayed
    await newCardElement.waitForDisplayed({ timeout: 5000 });
    
});
