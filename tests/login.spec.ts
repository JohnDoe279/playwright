import { test } from '@playwright/test'
import { MainPage } from './support/pages/mainPage'
import { CustomCommands } from './support/helper'
import { Credentials } from '././support/fixtures/credentials.model'
import data from '././support/fixtures/credentials.json'

let mainPage: MainPage
let customCommands: CustomCommands

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    customCommands = new CustomCommands(page)

    await mainPage.go()
    await customCommands.selectMenuByName('Log in')
})

test('Log in successfully', async () => {
    const login = data.success as Credentials
    await mainPage.fillLoginForm(login.username, login.password)
    await mainPage.submitLoginForm()
    const uName = await customCommands.checkLoggedUser(login.username)
})

test('Required fields validation', async () => {
    let login = data.empty as Credentials
    await mainPage.fillLoginForm(login.username, login.password)
    await customCommands.validadeAlertMessage('Please fill out Username and Password.')
    await mainPage.submitLoginForm()
})

test('Wrong user validation', async () => {
    let login = data.wrongUser as Credentials
    await mainPage.fillLoginForm(login.username, login.password)
    await customCommands.validadeAlertMessage('User does not exist.')
    await mainPage.submitLoginForm()
})

test('Wrong password validation', async () => {
    let login = data.wrongPass as Credentials
    await mainPage.fillLoginForm(login.username, login.password)
    await customCommands.validadeAlertMessage('Wrong password.')
    await mainPage.submitLoginForm()
})