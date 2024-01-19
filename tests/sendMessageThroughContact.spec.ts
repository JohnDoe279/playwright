import { test } from '@playwright/test'
import { MainPage } from './support/pages/mainPage'
import { CustomCommands } from './support/helper'
import { faker } from '@faker-js/faker'

let mainPage: MainPage
let customCommands: CustomCommands

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    customCommands = new CustomCommands(page)

    await mainPage.go()
})

test('Send message throught contact', async () => {
    let email = faker.internet.email()
    let name = faker.person.fullName()
    let message = faker.lorem.paragraph({ min: 1, max: 3 })

    await customCommands.selectMenuByName('Contact')
    await mainPage.fillMessageForm(email, name, message)
    await customCommands.validadeAlertMessage('Thanks for the message!!')
    await mainPage.submitMessageForm()
})