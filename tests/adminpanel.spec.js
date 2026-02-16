import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoHandymanVerify, TrustpilotVerify } from './common';
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

test("AdminPanel Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const trustpilotLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, trustpilotLocator);
})

test("AdminPanel Admin Panel link verify 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-9b6680d ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-3be4a35 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-34f4f6a ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-be8bebe ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-ab9289d ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-fd853e6 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-98ea0e7 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-04e2534 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 10", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-20e3883 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 11", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-f534426 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 12", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-1613740 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 13", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("//div[@class='elementor-element elementor-element-29a8292 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("AdminPanel Admin Panel link verify 14", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4973']").click()
    const adminpanelLocator = page.locator("div[class='elementor-element elementor-element-22f8902 ob-has-background-overlay elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})