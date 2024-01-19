<h1>
    Demo Blaze e2e testing
</h1>

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

- This repository contains the Demo Blaze E-commerce's e2e tests.
- All tests were build using PageObject design pattern
- Tests covered in this report:
    * Account creation
    * Login
    * Browsing the store’s main categories (Phones, Laptops, Monitors)
    * Play About Us video (Code is done but due to a component issue we are not able to execute)
    * Send a message through Contact
    * Shopping cart
    * Checkout
---

## Technologies 

- [Playwright](https://playwright.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Faker](https://fakerjs.dev/)

---

## Setup

```bash
    $ git clone git@github.com:TheoremOne-Assessments/qa-4cd7cc8e-499a-41a7-8088-08f33df9b79a-qa.git
```

```bash
    $ cd qa-4cd7cc8e-499a-41a7-8088-08f33df9b79a-qa
```

```bash
# install dependencies
    $ yarn install
    or
    $ npm install
```

```bash
# run all tests
    $ yarn playwright test
    or
    $ npx playwright test
```

```bash
# run test by spec file
    $ yarn playwright test newAccountCreation.spec.ts
    or
    $ npx playwright test newAccountCreation.spec.ts
```

```bash
# run test on headed mode (default is headless)
    $ yarn playwright test newAccountCreation.spec.ts --headed
    or
    $ npx playwright test newAccountCreation.spec.ts --headed
```

```bash
# run test on debug mode 
    $ yarn playwright test newAccountCreation.spec.ts --debug
    or
    $ npx playwright test newAccountCreation.spec.ts --debug
```

```bash
# show report 
    $ yarn playwright show-report
    or
    $ npx playwright show-report
```

---

```
├── .github
│   ├── workflows
│       ├── playwright.yml      ------ setup for github actions
├── playwright-report           ------ playwright reports repository
├── tests                       ------ tests repository
│   ├── browsingCategories.spec.ts
│   ├── login.spec.ts
│   ├── newAccountCreation.spec.ts
│   ├── placeOrder.spec.ts
│   ├── playVideo.spec.ts
│   ├── sendMessageThroughContact.spec.ts
│   ├── shoppingCart.spec.ts
│   └── support
│       ├── pages               ------ this folder contains the classes that represents each page from the application
│       │   ├── mainPage.ts
│       │   ├── productPage.ts
│       │   └── shoppingCartPage.ts
│       └── helper.ts           ------ custom commands used throughout the project
├── INSTRUCTIONS.md             ------ guide provide by TheoremOne
├── LICENSE
├── package.json                ------ project config file
├── playwright.config.ts        ------ playwright config file
├── README.md
```
[Back to top](#)
