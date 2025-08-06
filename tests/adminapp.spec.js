import { expect, test } from '@playwright/test';
import { AdminAppAppStore, AdminAppPlaystore, BookcallVerify, EnvantoAdminAppVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("AdminApp Admin App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4974']").click()
    const adminappLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
    await AdminAppPlaystore(page, adminappLocator);
})

test("AdminApp Admin App Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4974']").click()
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]");
    await EnvantoAdminAppVerify(page, envantohandymanLinkLocator);
})

test("AdminApp Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4974']").click()
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("AdminApp Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4974']").click()
    const trustpilotLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, trustpilotLocator);
})

test("AdminApp settings panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4974']").click()
    const learnbtnLinkLocator = page.locator("//a[normalize-space()='settings panel']");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/laravel-admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/laravel-admin-panel/");
    const iqonicDesignSpanLocator = page.locator("//p[contains(text(),'Laravel Admin panel for Flutter home service app i')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Laravel Admin panel for Flutter home service app is the heart of the solution. It gives full access and control of the platform to admin.');
});

test("AdminApp Admin App Playstore 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4974']").click()
    const adminappLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
    await adminappLocator.scrollIntoViewIfNeeded();
    await AdminAppPlaystore(page, adminappLocator);
})

test("AdminApp Admin App Appstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4974']").click()
    const adminpanelLocator = page.locator("(//a[@class='elementor-button elementor-button-link elementor-size-md'])[6]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminAppAppStore(page, adminpanelLocator);
})