import { Page, Locator } from '@playwright/test'

export class ProductPage {
    readonly page: Page
    readonly addToCartBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.addToCartBtn = page.locator('#tbodyid a >> text="Add to cart"')
    }

    async addProductToCart() {
        await this.addToCartBtn.click()
    }
}