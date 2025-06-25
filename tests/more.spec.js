const { test, expect } = require('@playwright/test');
const { EnvantoHandymanVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("More Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const hireus = page.locator("//li[@id='menu-item-7147']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        hireus.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/handyman/");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Launch Your On-Demand Service Booking Platform in');
})

test("More Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//li[@id='menu-item-8211']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://tidycal.com/iqonicdesign/handyman-demo-call");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Select date');
})

test("More Handyman link verify", async ({ page }) => {
    await page.goto(home_url);
    const envantohandymanLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]");
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("More Explore Handyman", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Take a Tour & Explore')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Take a Tour & Explore');
})