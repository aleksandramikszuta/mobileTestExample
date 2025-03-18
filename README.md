# Playwright Project with TypeScript and Yarn

## Overview
This project uses [Playwright](https://playwright.dev/) for end-to-end testing with TypeScript and Yarn as the package manager. Playwright enables automated testing across different browsers with ease.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [Yarn](https://yarnpkg.com/) (version 1.22 or later recommended)

## Installation

Install dependencies:
```sh
yarn install
```

## Playwright Setup
If Playwright is not already installed, run:
```sh
yarn playwright install
```
This will install the required browsers for testing.

## Running Tests

### Execute All Tests
```sh
yarn playwright test
```

### Run Tests in UI Mode
```sh
yarn playwright test --ui 
```

### Run Tests in Headed Mode
```sh
yarn playwright test --headed
```

### Run with Debugging
```sh
yarn playwright test --debug
```
