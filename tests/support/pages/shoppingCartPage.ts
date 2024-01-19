import { Page, expect, Locator } from '@playwright/test'
import { faker } from '@faker-js/faker'

export class ShoppingCartPage {
    readonly page: Page
    // product elements
    readonly cartProductRows: Locator
    readonly placeOrderButton: Locator
    // order form elements
    readonly orderForm: Locator
    readonly orderFormName: Locator
    readonly orderFormCountry: Locator
    readonly orderFormCity: Locator
    readonly orderFormCardNumber: Locator
    readonly orderFormCardMonth: Locator
    readonly orderFormCardYear: Locator
    readonly purchaseButton: Locator
    readonly alertSuccessPurchase: Locator
    readonly alertSuccessMessage: Locator

    constructor(page: Page) {
        this.page = page
        //products locators
        this.cartProductRows = page.locator('#tbodyid tr')
        this.placeOrderButton = page.locator('div.row button')
        this.purchaseButton = page.locator('.modal-content button >> text="Purchase"')
        // order form locators
        this.orderFormName = page.locator('.modal-content input#name')
        this.orderFormCountry = page.locator('.modal-content input#country')
        this.orderFormCity = page.locator('.modal-content input#city')
        this.orderFormCardNumber = page.locator('.modal-content input#card')
        this.orderFormCardMonth = page.locator('.modal-content input#month')
        this.orderFormCardYear = page.locator('.modal-content input#year')
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click()
    }

    async fillOrder() {
        let creditCardMonth = faker.number.int({min: 1, max: 12})
        let creditCardYear = faker.number.int({min: 2030, max: 2050})

        await this.orderFormName.fill(faker.person.fullName())
        await this.orderFormCountry.fill(faker.location.country())
        await this.orderFormCity.fill(faker.location.city())
        await this.orderFormCardNumber.fill(faker.finance.creditCardNumber())
        await this.orderFormCardMonth.fill(creditCardMonth.toString())
        await this.orderFormCardYear.fill(creditCardYear.toString())
    }

    async submitOrder() {
        await this.purchaseButton.click()
    }

    async checkProductRows(amount: number) {
        await expect(this.cartProductRows).toHaveCount(amount)
    }
}