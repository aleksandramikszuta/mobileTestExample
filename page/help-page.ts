import { Locator, Page } from "@playwright/test";
import { text } from "stream/consumers";

export class HelpPage {
    page: Page;
    headline: Locator;
    gameTitle: Locator;
    dropDown: Locator;
    playGameButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headline = page.locator('.page-layout__headline h1')
        this.gameTitle = page.locator('.page-layout .help-title')
        this.dropDown = page.locator('[data-gtm-id="dropdown"] option');
        this.playGameButton = page.locator('.play-game-button button span')
    }

   async getDropdownValue(gameName: string){
    const value = await this.dropDown.filter({ hasText: gameName }).innerText();
    return value;
   }
}