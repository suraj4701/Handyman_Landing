import { test } from '@playwright/test';
import { BookcallVerify, EnvantoHandymanVerify, TrustpilotVerify, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("UserWebsite Handyman link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const userwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
    await UserWebsiteVerify(page, userwebsiteLocator);
})

test("UserWebsite Handyman Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]");
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("UserWebsite Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("UserWebsite Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const trustpilotLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, trustpilotLocator);
})

test("UserWebsite view demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const userwebsiteLocator = page.locator("//div[@class='elementor-element elementor-element-e312000 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await userwebsiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(page, userwebsiteLocator);
})

test("UserWebsite view demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const userwebsiteLocator = page.locator("//div[@class='elementor-element elementor-element-905f917 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await userwebsiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(page, userwebsiteLocator);
})

test("UserWebsite view demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const userwebsiteLocator = page.locator("//div[@class='elementor-element elementor-element-d351497 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await userwebsiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(page, userwebsiteLocator);
})

test("UserWebsite view demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const userwebsiteLocator = page.locator("//div[@class='elementor-element elementor-element-3812ad8 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await userwebsiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(page, userwebsiteLocator);
})

test("UserWebsite view demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-7174']").hover()
    await page.locator("//li[@id='menu-item-4978']").click()
    const userwebsiteLocator = page.locator("//div[@class='elementor-element elementor-element-7544fc0 ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
    await userwebsiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(page, userwebsiteLocator);
})