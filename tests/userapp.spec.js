import { expect, test } from '@playwright/test';
import { BookcallVerify, EnvantoHandymanVerify, TrustpilotVerify, UserAppAppStore, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("UserApp User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("UserApp Handyman link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("UserApp Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("UserApp Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const trustpilotLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, trustpilotLocator);
})

test("UserApp Try Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const learnbtnLinkLocator = page.locator("//a[contains(text(),'Try Demo')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/explore-full-solution/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const iqonicDesignSpanLocator = page.locator("//h1[contains(text(),'Take a Tour & Explore')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Take a Tour & Explore');
});

test("UserApp User App Playstore 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("UserApp User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppAppStore(page, adminpanelLocator);
})