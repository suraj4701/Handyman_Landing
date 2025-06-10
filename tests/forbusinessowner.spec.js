const { test, expect } = require('@playwright/test');
const { TrustpilotVerify } = require('./common');

test("For Business Owner Trustpilot Verify", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4980']//a[@class='ct-menu-link'][normalize-space()='For Business Owners']").click()
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("For Business Owner Admin Panel", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4980']//a[@class='ct-menu-link'][normalize-space()='For Business Owners']").click()
    const ondemandLocator = page.locator("//a[@target='_blank'][normalize-space()='Admin Panel']");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/laravel-admin-panel/");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h1[1]/span[1]/span[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Admin Panel');
})

test("For Business Owner User Website", async ({ page }) => {
    await page.goto("https://handyman.iqonic.design/")
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4980']//a[@class='ct-menu-link'][normalize-space()='For Business Owners']").click()
    const ondemandLocator = page.locator("//a[@target='_blank'][normalize-space()='User Website']");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/user-website/");
    const iqonicDesignSpanLocator = newPage.locator("//p[contains(text(),'Handyman Flutter on-demand home services app with ')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Flutter on-demand home services app with complete solution is a truly universal solution. For all the users who prefer to use big screen (computers/laptop) can book their services from User Website.');
})