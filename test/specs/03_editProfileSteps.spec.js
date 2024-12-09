const { Given, When, Then } = require('@wdio/cucumber-framework');
const { loginTrello, settingsPage } = require('../helper/loginTrello')

//Edit profile settings
Given('user is on the profile and visibility settings page', async () => {
    await loginTrello()
    await settingsPage()
});

When('the user updates username and the bio', async () => {
    await $('#username').setValue('new_name11');
    await $('#bio').setValue('New bio');
});

When('clicks Save button', async () => {
    await $("button[class='JhBc38JIAKzHAt bxgKMAm3lq5BpA SdamsUKjxSBwGb SEj5vUdI3VvxDc']").click();
    await browser.pause(2000)
});

Then('user should see the updated profile information', async () => {
    await expect($('#username')).toHaveValue('new_name11');
    await expect($('#bio')).toHaveValue('New bio');
});