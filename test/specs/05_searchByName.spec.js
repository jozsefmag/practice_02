const {Given, When, Then} = require("@wdio/cucumber-framework")
const {loginTrello} = require("../helper/loginTrello")

Given("user is at Trello's user workspace page", async () => {
  await loginTrello()
  await $("button[data-testid='workspace-switcher']").click()
  await $("[data-testid='workspace-switcher-popover-tile']").click()
})

When("user clicks on search", async () => {
  await $("#search").click()
})

When("user types the board name", async () => {
  await $("#search").setValue("New Board")
  await $("a[title='New Board']").click()
})

Then("the board with the specified name should appear", async () => {
  await browser.pause(5000)
  await $("span.new board")
  const currentUrl = await browser.getUrl()
  expect(currentUrl).toContain("/new-board")
})
