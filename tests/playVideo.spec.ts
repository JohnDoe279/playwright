// import { test } from "@playwright/test";
// import { CustomCommands } from "./support/helper";
// import { MainPage } from "./support/pages/mainPage";

// let mainPage: MainPage
// let customCommands: CustomCommands

// test.beforeEach(async ({ page }) => {
//     mainPage = new MainPage(page)
//     customCommands = new CustomCommands(page)

//     await mainPage.go()
// })

// test('Play About Us video', async() => {
//     await customCommands.selectMenuByName('About us')
//     await mainPage.isVideoVisible()
//     await mainPage.clickAndPlayVideo()
//     await mainPage.isVideoPlaying()
// })