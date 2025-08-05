import { expect, test } from '@playwright/test';
import { BookcallVerify, EnvantoHandymanVerify } from './common';
const home_url = process.env.HOME_URL;

test("Pricing Handyman link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4979']").click()
    const envantohandymanLinkLocator = page.locator("(//a[@class='ha-comparison-table__btns-item--btn elementor-repeater-item-91f587a'])[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Pricing One Time charge", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4979']").click()
    const ondemandLocator = page.locator("(//a[@class='ha-comparison-table__btns-item--btn elementor-repeater-item-863363a'])[1]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/handyman-service-flutter-app-with-laravel-backend/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Handyman Service Flutter App with Laravel Backend')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Service Flutter App with Laravel Backend');
})

test("Pricing Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4979']").click()
    const ondemandLocator = page.locator("(//a[@class='elementor-button elementor-button-link elementor-size-md'])[3]");
    await ondemandLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, ondemandLocator);
})

test("Pricing Handyman link verify 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4979']").click()
    const envantohandymanLinkLocator = page.locator("(//a[@class='elementor-button elementor-button-link elementor-size-md'])[4]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})