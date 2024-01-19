import { Page, expect, Locator } from '@playwright/test'


export class CustomCommands {
    readonly page: Page
    readonly menu: Locator
    readonly loggedUser: Locator
    readonly categoryMenu: Locator
    readonly productTable: Locator
    readonly productName: Locator
    readonly productPrice: Locator
    readonly productDescription: Locator

    constructor(page: Page) {
        this.page = page
        this.menu = page.locator('#navbarExample')
        this.loggedUser = page.locator('#nameofuser')
        this.categoryMenu = page.locator('.list-group')
        this.productTable = page.locator('#tbodyid')
        this.productName = page.locator('#tbodyid .name')
        this.productPrice = page.locator('#tbodyid .price-container')
        this.productDescription = page.locator('#tbodyid .description')
    }

    async validadeAlertMessage(alertMessage: string) {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual(alertMessage)
            await dialog.accept()
        })
    }

    async selectMenuByName(menuName: string) {
        await expect(this.menu).toBeVisible()
        this.page.locator(`ul .nav-link >> text="${menuName}"`).click()
        await this.page.waitForLoadState('networkidle')
    }

    async checkLoggedUser(userName: string) {
        await expect(this.loggedUser).toBeVisible()
        const uName = (await this.loggedUser.innerText()).valueOf()
        expect(uName).toEqual(`Welcome ${userName}`)
    }

    async selectCategoryByName(categoryName: string) {
        await expect(this.categoryMenu).toBeVisible()
        this.page.locator(`//a[text()="${categoryName}"]`).click()
    }

    async selectProductByPosition(productPosition: number) {
        await expect(this.productTable).toBeVisible()
        await this.page.click(`//*[@id="tbodyid"]/div[${productPosition}]/div/div/h4/a`)
    }

    async deleteProductByPosition(productPosition: number) {
        await this.page.locator(`//*[@id="tbodyid"]/tr[${productPosition}]/td[4]/a`).click()
    }
}