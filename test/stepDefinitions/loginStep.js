const {Given, When, Then} = require("@wdio/cucumber-framework")
const functions = require("../functions")

Given(/^I am on the KasirAja login page$/, async () => {
    await functions.open('/')
})

When(/^I login with the correct credentials$/, async () => {
    await functions.login("test43@mails.id", "abc123")
})

Then(/^I could login successfully$/, async () => {
    await functions.displyaDashboardMenu()
})

When(/^I login with the incorrect password$/, async () => {
    await functions.login("test43@mails.id", "abc123342")
})

Then(/^I could see error alert$/, async () => {
    await functions.assertErrorMsg("Kredensial yang Anda berikan salah")
})