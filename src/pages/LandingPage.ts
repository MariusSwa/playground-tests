import { Page, Locator, expect } from "@playwright/test";
import { landingSel } from "../utils/selectors/landing.selectors";
import { routes } from "../utils/routes";

export class LandingPage {
  readonly page: Page;

    loginLink: Locator;
    registerLink: Locator;
    testDuoLink: Locator;
    howItWorksLink: Locator;
    whatToExpectLink: Locator;
    registerNowLink: Locator;
    docsLink: Locator;
    feedBackLink: Locator;
    statusLink: Locator;
    howItWorksSection: Locator;
    whatToExpectSection: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginLink = landingSel.loginLink(page);
        this.registerLink = landingSel.registerLink(page);
        this.testDuoLink = landingSel.testDuoLink(page);
        this.howItWorksLink = landingSel.howItWorksLink(page);
        this.whatToExpectLink = landingSel.whatToExpectLink(page);
        this.registerNowLink = landingSel.registerNowLink(page);
        this.docsLink = landingSel.docsLink(page);
        this.feedBackLink = landingSel.feedBackLink(page);
        this.statusLink = landingSel.statusLink(page);
        this.howItWorksSection = landingSel.howItWorksSection(page);
        this.whatToExpectSection = landingSel.whatToExpectSection(page);
        this.registerNowLink = landingSel.registerNowLink(page);
        this.docsLink = landingSel.docsLink(page);
        this.feedBackLink = landingSel.feedBackLink(page);
        this.statusLink = landingSel.statusLink(page);

    };

    async gotoLandingPage() {
        await this.page.goto(routes.home, { waitUntil: "domcontentloaded" });
    };

    async clickLoginLink() {
        await expect(this.loginLink).toBeVisible();
        await this.loginLink.click();
        await expect(this.page).toHaveURL(/login\.php/);
    };

    async clickRegisterLink() {
        await expect(this.registerLink).toBeVisible();
        await this.registerLink.click();
        await expect(this.page).toHaveURL(/register\.php/);
    };

    async clickTestDuoLink() {
        await expect(this.testDuoLink).toBeVisible();
        await this.testDuoLink.click();
        await expect(this.page).toHaveURL(/testduo\.co\.za/);
    };

    async clickHowItWorksLink() {
        const section = this.howItWorksSection;
        await this.howItWorksLink.click();
        await section.waitFor({ state: 'visible' });
        await expect(this.howItWorksLink).toBeVisible();
    };

    async clickWhatToExpectLink() {
        const section = this.whatToExpectSection;
        await this.whatToExpectLink.click();
        await section.waitFor({ state: 'visible' });
        await expect(this.whatToExpectLink).toBeVisible();
     }

     async clickRegisterNowLink() {
        await this.registerNowLink.scrollIntoViewIfNeeded();
        await expect(this.registerNowLink).toBeVisible();
        await this.registerNowLink.click();
        await expect(this.page).toHaveURL(/register\.php/);
     }

     async clickDocsLink() {
        await this.docsLink.scrollIntoViewIfNeeded();
        await expect(this.docsLink).toBeVisible();
        await this.docsLink.click();
          await expect(this.page).toHaveURL(/(\/docs$|docs\.testduo\.co\.za)/);
     }

     async clickFeedBackLink() {
        await this.feedBackLink.scrollIntoViewIfNeeded();
        await expect(this.feedBackLink).toBeVisible();
        await this.feedBackLink.click();
          await expect(this.page).toHaveURL(/(\/feedback$|feedback\.testduo\.co\.za)/);
     }

     async clickStatusLink() {
        await this.statusLink.scrollIntoViewIfNeeded();
        await expect(this.statusLink).toBeVisible();
        await this.statusLink.click();
          await expect(this.page).toHaveURL(/(\/status$|status\.testduo\.co\.za)/);
     }







    // TODO: Add tests for docs, status and feedback once they are added to the site
}

