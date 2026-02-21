import { test, expect } from "../src/fixtures/test";

// This line removes any existing authentication state before running the tests in this file. 
// This ensures that the tests start with a clean slate and are not affected by any previous login 
// sessions.

test.describe("Landing page @smoke", () => {

  test("should display the landing page", async ({ landingPage }) => {
    await landingPage.gotoLandingPage();
  });

    test("Landing page links: Login link", async ({ landingPage }) => {
        await landingPage.gotoLandingPage();
        await landingPage.clickLoginLink();
    });

    test("Landing page links: Register link", async ({ landingPage }) => {
        await landingPage.gotoLandingPage();
        await landingPage.clickRegisterLink();
    });

    test("Landing page links: TestDuo link", async ({ landingPage }) => {
        await landingPage.gotoLandingPage();
        await landingPage.clickTestDuoLink();   
    });

    test("Landing page links: Same page links", async ({ landingPage }) => {
        await landingPage.gotoLandingPage();
        await landingPage.clickHowItWorksLink();  

        await landingPage.clickWhatToExpectLink();
        
        // await landingPage.howItWorksSection.scrollIntoViewIfNeeded();
    });

    test("Landing page links: Docs link", async ({ landingPage }) => {
        await landingPage.gotoLandingPage();
        await landingPage.clickDocsLink();
    });

    test("Landing page links: Feedback link", async ({ landingPage }) => {
        await landingPage.gotoLandingPage();
        await landingPage.clickFeedBackLink();  
    });

    test("Landing page links: Status link", async ({ landingPage }) => {
        await landingPage.gotoLandingPage();
        await landingPage.clickStatusLink();
    });

});