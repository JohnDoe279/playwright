import { test } from '@playwright/test'

import { MainPage } from './support/pages/mainPage'
import { ProductPage } from './support/pages/productPage'
import { ShoppingCartPage } from './support/pages/shoppingCartPage'
import { CustomCommands } from './support/helper'

let mainPage: MainPage
let productPage: ProductPage
let shoppingCartPage: ShoppingCartPage
let customCommands: CustomCommands

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    productPage = new ProductPage(page)
    shoppingCartPage = new ShoppingCartPage(page)
    customCommands = new CustomCommands(page)

    await mainPage.go()
    await customCommands.selectProductByPosition(1)
    await productPage.addProductToCart()
    await customCommands.selectMenuByName('Cart')
    await shoppingCartPage.clickPlaceOrder()
})

test('Purchase required Fields Validation', async () => {
    await customCommands.validadeAlertMessage('Please fill out Name and Creditcard.')
    await shoppingCartPage.submitOrder()
})

test('Purchase a Product', async () => {
    await shoppingCartPage.fillOrder()
    await customCommands.validadeAlertMessage('Thank you for your purchase!')
    await shoppingCartPage.submitOrder()
})

