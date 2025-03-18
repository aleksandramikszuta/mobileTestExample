
import { Locator, Page } from "@playwright/test";


export class DetailsPage {
    page: Page;
    header: Locator;
    helpText: Locator;

    constructor(page: Page) {
        this.header = page.locator('.iwg-header h1')
        this.helpText = page.locator('[data-element-id="iwg.game.help.show"]')
    }
async navigateToHelpPage(){
    await this.helpText.click();
}
}