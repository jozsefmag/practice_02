async function loginTrello(username, password) {
  await browser.url(
    "https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D",
  );

  const usernameField = await $("#username");
  await usernameField.setValue("trello.task.email@gmail.com");

  const loginButton = await $("#login-submit");
  await loginButton.click();

  const passwordField = await $("#password");
  await passwordField.setValue("pw.example01");

  await loginButton.click();
}
//Only used in 03_editProfileSteps.spec to hide a big chunk of "ugly" code
async function settingsPage() {
  const userButton = await $("div[data-testid='header-member-menu-avatar']");
  await userButton.waitForDisplayed();
  await userButton.click();
  const profileButton = await $("a[data-testid='account-menu-profile']");
  await profileButton.waitForDisplayed();
  await profileButton.click();
}

module.exports = {loginTrello, settingsPage};
