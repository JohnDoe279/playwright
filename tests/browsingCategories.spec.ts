import { test } from '@playwright/test'
import { MainPage } from './support/pages/mainPage'
import { CustomCommands } from './support/helper'

let mainPage: MainPage
let customCommands: CustomCommands

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    customCommands = new CustomCommands(page)

    await mainPage.go()
})

test('Browse to Monitors category', async () => {
    await customCommands.selectCategoryByName('Monitors')
    await mainPage.isProductTableVisible()
})

test('Browse to Phone category', async () => {
    await customCommands.selectCategoryByName('Phones')
    await mainPage.isProductTableVisible()
})

test('Browse to Laptops category', async () => {
    await customCommands.selectCategoryByName('Laptops')
    await mainPage.isProductTableVisible()
})

