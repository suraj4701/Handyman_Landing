const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoHandymanVerify, HandymanAppPlaystore, HandymanAppAppStore } = require('./common');

test("Service Provider App Provider App Playstore", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await HandymanAppPlaystore(page, adminpanelLocator);
})

test("Service Provider App Handyman link verify", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]").click()
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Service Provider App Trustpilot Verify", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]").click()
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("Service Provider App Try Demo", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]").click()
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

test("Service Provider App Provider App Playstore 2", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await HandymanAppPlaystore(page, adminpanelLocator);
})

test("Service Provider App Provider App AppStore", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await HandymanAppAppStore(page, adminpanelLocator);
})