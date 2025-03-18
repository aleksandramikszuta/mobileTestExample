import { test, expect, Locator, Page } from '@playwright/test';
import { MainPage } from '../page/main-page';
import { DetailsPage } from '../page/details-page';
import { HelpPage } from '../page/help-page';
import { default as data } from '../testData.json';
let mainPage, detailsPage, helpPage;

async function swipeFromElement(page: Page, locator: Locator, xOffset: number) {
    locator.scrollIntoViewIfNeeded();
    const bb = await locator.boundingBox();
    if (!bb) return;
    const { x, y } = { x: bb.x + bb.width / 2, y: bb.y + bb.height / 2 };
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + xOffset, y);
    await page.mouse.up();
}

test('Should link to proper games from mobile page - LOTTO24 case study ', async ({ page }) => {
    mainPage = new MainPage(page);
    detailsPage = new DetailsPage(page)
    helpPage = new HelpPage(page)

    await page.goto(data.mainUrl);
    await mainPage.acceptAllCookies();
    await expect(mainPage.zealTeaser.locator(mainPage.headline)).toContainText(data.headlineText);
    await swipeFromElement(page, mainPage.zealTeaser, -200);
    await swipeFromElement(page, mainPage.zealTeaser, -200);
    const gameName = await mainPage.getGameName(mainPage.singleGameTeaser)
    const url = data.gameUrl + gameName.toLowerCase().replace(' ','');
    await mainPage.zealTeaser.locator(mainPage.singleGameTeaser).click();
    await expect(detailsPage.header).toContainText(gameName);
    await expect(detailsPage.helpText).toContainText(`Zur ${gameName} Hilfe`);
    await detailsPage.navigateToHelpPage();
    await expect(helpPage.headline).toContainText('Hilfe');
    await expect(helpPage.gameTitle).toContainText(gameName);
    const dropdownValue = await helpPage.getDropdownValue(gameName);
    await expect(dropdownValue).toEqual(gameName);
    await expect(helpPage.playGameButton).toContainText(`${gameName} spielen`);
    await helpPage.playGameButton.click();
    await expect(page).toHaveURL(url)
  });