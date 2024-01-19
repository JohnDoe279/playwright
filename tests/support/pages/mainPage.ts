import { Page, expect, Locator } from '@playwright/test'

export class MainPage {
    readonly page: Page
    readonly product: Locator
    readonly signUpModal: Locator
    readonly signUpUsername: Locator
    readonly signUpPassword: Locator
    readonly signUpButton: Locator
    readonly signInModal: Locator
    readonly signInUsername: Locator
    readonly signInPassword: Locator
    readonly logInButton: Locator
    readonly loggedUser: Locator
    readonly productTable: Locator
    readonly messageEmailField: Locator
    readonly messageNameField: Locator
    readonly messageField: Locator
    readonly sendMessageButton: Locator
    readonly menu: Locator
    readonly videoModal: Locator
    readonly video: Locator
    readonly isPlaying: Locator

    constructor(page: Page) {
        this.page = page
        this.productTable = page.locator('#tbodyid')
        // SIGN UP - Objects Locator
        this.signUpModal = page.locator('#signInModal .modal-content')
        this.signUpUsername = page.locator('#sign-username')
        this.signUpPassword = page.locator('#sign-password')
        this.signUpButton = page.locator('#signInModal button >> text="Sign up"')
        // SIGN IN - Objects Locator
        this.signInModal = page.locator('#logInModal .modal-content')
        this.signInUsername = page.locator('#loginusername')
        this.signInPassword = page.locator('#loginpassword')
        this.logInButton = page.locator('#logInModal button >> text="Log in"')
        // message form fields
        this.messageEmailField = page.locator('#recipient-email')
        this.messageNameField = page.locator('#recipient-name')
        this.messageField = page.locator('#message-text')
        this.sendMessageButton = page.locator('#exampleModal button >> text="Send message"')
        this.menu = page.locator('#navbarExample')
        this.loggedUser = page.locator('#nameofuser')
        // Video Fields
        this.videoModal = page.locator('//*[@id="videoModal"]/div/div')
        this.video = page.locator('//*[@id="example-video"]/div[1]')
        this.isPlaying = page.locator('//div[contains(@class,"vjs-playing")]')
    }

    async go() {
        await this.page.goto('https://www.demoblaze.com/')
    }
    //SIGN UP 
    async fillSignUpForm(username: string, password: string) {
        await this.signUpUsername.fill(username)
        await this.signUpPassword.fill(password)
    }

    async submitSignUpForm() {
        await this.signUpButton.click()
        await this.page.waitForLoadState('networkidle')
    }

    //SIGN IN
    async fillLoginForm(username: string, password: string) {
        await this.signInUsername.fill(username)
        await this.signInPassword.fill(password)
    }

    async submitLoginForm() {
        await this.logInButton.click()
        await this.page.waitForLoadState('networkidle')
    }

    async isProductTableVisible() {
        await expect(this.productTable).toBeVisible()
    }

    async fillMessageForm(email: string, name: string, message: string) {
        await this.messageEmailField.fill(email)
        await this.messageNameField.fill(name)
        await this.messageField.fill(message)
    }

    async submitMessageForm() {
        await this.sendMessageButton.click()
        await this.page.waitForLoadState('networkidle')
    }

    async isVideoVisible(){
        await expect(this.videoModal).toBeVisible
    }

    async clickAndPlayVideo(){
        await this.video.click()
    }

    async isVideoPlaying(){
        await expect(this.isPlaying).toBeVisible
    }
}

