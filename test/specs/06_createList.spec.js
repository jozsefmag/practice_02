const {Given, When, Then} = require("@wdio/cucumber-framework")
const {loginTrello} = require("../helper/loginTrello")

Given("user is at a specific board", async () => {
  await loginTrello()
  await $("div[title='New Board']").click()
})

When("user clicks Add another list button", async () => {
  await $("button[data-testid='list-composer-button']").click()
})

When("user adds a name for the list", async () => {
  await $("textarea[data-testid='list-name-textarea']").setValue("New List")
})

When("user clicks on Add list button", async () => {
  await $("button[data-testid='list-composer-add-list-button']").click()
})

Then("user should see a new list unit", async () => {
  const listNameDisplay = $("h2[data-testid='list-name']")
  await expect(listNameDisplay).toHaveText("New List") //Try waitForDisplayed
})
