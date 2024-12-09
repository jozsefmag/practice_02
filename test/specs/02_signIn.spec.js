const { Given, When, Then } = require('@wdio/cucumber-framework');

//Sign in
Given('user is on the Trello\'s sign-in page', async () => {
    await browser.url('https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D');
});

When('user enters a valid email', async () => {
    await $('#username').setValue('trello.task.email@gmail.com');
    await $('#login-submit').click();
});

When('user enters a valid password', async () => {
    await $('#password').setValue('pw.example01');
});

When("clicks Log in button", async()=>{
    await $('#login-submit').click()
})

Then('user should be at the home screen', async () => {
    await browser.pause(5000)
    const currentUrl = await browser.getUrl()
    await expect(currentUrl).toContain('/boards')
});

Then('user should see Trello boards', async () => {
    const boards = await $("ul[class='boards-page-board-section-list']")
    await boards.waitForDisplayed()
});
