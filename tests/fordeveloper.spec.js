const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoHandymanVerify, UserAppPlaystore, UserAppAppStore } = require('./common');
const home_url = process.env.HOME_URL;

test("For Developer Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4981']//a[@class='ct-menu-link'][normalize-space()='For Developer']").click()
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("For Developer Handyman Flutter home service app", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4981']//a[@class='ct-menu-link'][normalize-space()='For Developer']").click()
    const ondemandLocator = page.locator("//a[normalize-space()='Handyman Flutter home service app']");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/handyman-app/");
    const iqonicDesignSpanLocator = newPage.locator("//p[contains(text(),'Handyman Flutter Home Service App helps all on-fie')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Flutter Home Service App helps all on-field handymans to get the receive tasks and get service done.');
})

test("For Developer User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4981']//a[@class='ct-menu-link'][normalize-space()='For Developer']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("For Developer User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4981']//a[@class='ct-menu-link'][normalize-space()='For Developer']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppAppStore(page, adminpanelLocator);
})

test("For Developer Handyman link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-4970']").hover()
    await page.locator("//li[@id='menu-item-4981']//a[@class='ct-menu-link'][normalize-space()='For Developer']").click()
    const envantohandymanLinkLocator = page.locator("//div[@class='elementor-element elementor-element-3d7d9c8 elementor-widget__width-auto ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-md']");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})