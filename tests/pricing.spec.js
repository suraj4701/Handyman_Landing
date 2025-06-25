const { test, expect } = require('@playwright/test');
const { EnvantoHandymanVerify } = require('./common');

test("Pricing Handyman link verify", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4979']").click()
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/ul[1]/li[1]/a[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Pricing One Time charge", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4979']").click()
    const ondemandLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
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
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4979']").click()
    const ondemandLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://tidycal.com/iqonicdesign/handyman-demo-call");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Select date');
})

test("Pricing Handyman link verify 2", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4979']").click()
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})