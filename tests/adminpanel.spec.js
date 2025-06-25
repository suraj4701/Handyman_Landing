const { test, expect } = require('@playwright/test');
const { AdminPanelVerify, TrustpilotVerify, EnvantoHandymanVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("AdminPanel Admin Panel link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Handyman Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]");
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("AdminPanel Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("AdminPanel Admin Panel link verify 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 10", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 11", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 12", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[13]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/span[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})