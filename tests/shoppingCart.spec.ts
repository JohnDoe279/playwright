import { test } from "@playwright/test"
import { CustomCommands } from "./support/helper"
import { MainPage } from './support/pages/mainPage'
import { ProductPage } from "./support/pages/productPage"
import { ShoppingCartPage } from './support/pages/shoppingCartPage'

let mainPage: MainPage
let productPage: ProductPage
let customCommands: CustomCommands
let shoppingCartPage: ShoppingCartPage

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    productPage = new ProductPage(page)
    customCommands = new CustomCommands(page)
    shoppingCartPage = new ShoppingCartPage(page)

    await mainPage.go()
})

test('Add products to cart', async () => {
    await customCommands.selectProductByPosition(1)
    await productPage.addProductToCart()
    await customCommands.selectMenuByName('Home')
    await customCommands.selectProductByPosition(3)
    await productPage.addProductToCart()
    await customCommands.selectMenuByName('Cart')
    await shoppingCartPage.checkProductRows(2)
})

test('Remove product from Cart', async () => {
    await customCommands.selectProductByPosition(1)
    await productPage.addProductToCart()
    await customCommands.selectMenuByName('Home')
    await customCommands.selectProductByPosition(3)
    await productPage.addProductToCart()
    await customCommands.selectMenuByName('Cart')
    await customCommands.deleteProductByPosition(1)
    await shoppingCartPage.checkProductRows(1)
})