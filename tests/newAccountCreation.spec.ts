import { test } from '@playwright/test'
import { MainPage } from './support/pages/mainPage'
import { CustomCommands } from './support/helper'
import { faker } from '@faker-js/faker'

let mainPage: MainPage
let customCommands: CustomCommands
let username = faker.string.alphanumeric(8)
let password = faker.string.alphanumeric(8)

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    customCommands = new CustomCommands(page)

    await mainPage.go()
    await customCommands.selectMenuByName('Sign up')
})

test('Required fields validation', async () => {
    await mainPage.fillSignUpForm('', '')
    await customCommands.validadeAlertMessage('Please fill out Username and Password.')
    await mainPage.submitSignUpForm()
})

test('Create new account', async () => {
    await mainPage.fillSignUpForm(username, password)
    await customCommands.validadeAlertMessage('Sign up successful.')
    await mainPage.submitSignUpForm()
})

test('User already exists', async () => {
    await mainPage.fillSignUpForm(username, password)
    await customCommands.validadeAlertMessage('This user already exist.')
    await mainPage.submitSignUpForm()
})

