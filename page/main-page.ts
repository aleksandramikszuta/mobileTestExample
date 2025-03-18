import { expect, Locator, Page } from "@playwright/test";


export class MainPage {
    page: Page;
    headline: Locator;
    zealTeaser: Locator;
    teaserContent: Locator;
    swipeNextButton: Locator;
    singleGameTeaser: Locator;
    secondGame :Locator;
    acceptAllCookiesButton: Locator;


    constructor(page: Page) {
        this.headline = page.locator('.teaser-headline-link h1')
        this.teaserContent = page.locator('.teasers .swiper-wrapper')
        this.swipeNextButton = page.locator('[dataelementid="swiper-nav-next-btn"]');
        this.zealTeaser = page.locator('[data-element-id="GAMES_HOMEPAGE_QUINARY"]');
        this.singleGameTeaser = page.locator('[data-element-id="teaser.thumbnail-horizontal-teaser"] .info-container p').first();
        this.secondGame = page.locator('[data-element-id="teaser.thumbnail-horizontal-teaser"]').nth(1);
        this.acceptAllCookiesButton = page.locator('[data-element-id="cookieConsentPromptOverlay.acceptAllButton"]');
    }

    // async function findExistingHeadline(title: String){
    //     await this.headline.filter( toHaveText: {title})
    // }
    // async function doubleSwipeToNext(teaser: Locator, page) {
    //     await page.locator()
        
    // }
    async acceptAllCookies(){
        await this.acceptAllCookiesButton.click({timeout: 15000})
    }
    async doubleSwipeToNext(){
    //    await this.zealTeaser.locator(this.teaserContent).hover();
     //   await this.zealTeaser.touchscreen.swipe.right();
    }
    async getGameName(game: Locator){
        await expect(game).toBeVisible();
        const name = await game.innerText();
        return name;
    }
}
