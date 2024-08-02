const {Given, When, Then} = require("@wdio/cucumber-framework")
const functions = require("../functions")

Given(/^I am on the KasirAja web page$/, async () => {
    await functions.open('/')
})

When(/^I click ingin mencoba daftar button$/, async () => {
    
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let generatedEmail

When(/^I register with valid data$/, async () => {
    generatedEmail = "test" + getRandomInt(1,100) +"@mails.id"
    await functions.register("TokoKu", generatedEmail, "abc123")
})

When(/^I register with invalid email$/, async () => {
    await functions.register("TokoKu", "testsss", "abc123")
})

Then(/^I could register successfully$/, async () => {
    await functions.assertPopup()
})

Then(/^I could see the error popup$/, async () => {
    await functions.assertErrorMsg('"email" must be a valid email')
})