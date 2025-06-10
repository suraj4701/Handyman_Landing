const { test, expect } = require('@playwright/test');

test("Resources Documentation", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4972']").hover()
    const documentation = await page.locator("//li[@id='menu-item-4983']")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        documentation.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/handyman-service-doc/build/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Handyman Service')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Service');
})

test("Resources FAQ", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4972']").hover()
    const faq = await page.locator("//li[@id='menu-item-4982']")
    await faq.click();
    await page.waitForURL("https://handyman.iqonic.design/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/faq/");
    const iqonicDesignSpanLocator = page.locator("//h2[contains(text(),'FAQ For Creators')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('FAQ For Creators');
});

test("Resources video Guide", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4972']").hover()
    const videoguide = await page.locator("//li[@id='menu-item-4984']")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        videoguide.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/playlist?list=PLSPY71mRbPj-Lji00XEH5QxeWp_B8kVzs");
})

test("Resources Tech Support", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4972']").hover()
    const documentation = await page.locator("//li[@id='menu-item-4985']")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        documentation.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Support Desk')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Support Desk');
})