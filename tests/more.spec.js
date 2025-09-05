import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoHandymanVerify, HandymanAppAppStore, HandymanAppPlaystore, TrustpilotVerify, UserAppAppStore, UserAppPlaystore, UserWebsiteVerify } from './common';
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
    expect(newPageUrl).toBe("https://handyman.iqonic.design/handyman-demo-call/");
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
})

test("More Explore Handyman Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const trustpilotLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/a[1]");
    await TrustpilotVerify(newPage, trustpilotLocator);
})

test("More Explore Handyman Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const trustpilotLocator = newPage.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(newPage, trustpilotLocator);
})

test("More Explore Handyman User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(newPage, adminpanelLocator);
})

test("More Explore Handyman User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppAppStore(newPage, adminpanelLocator);
})

test("More Explore Handyman Provider App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await HandymanAppPlaystore(newPage, adminpanelLocator);
})

test("More Explore Handyman Provider App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await HandymanAppAppStore(newPage, adminpanelLocator);
})

test("More Explore Handyman User Website Verify", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const userwebsiteLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/a[1]");
    await userwebsiteLocator.scrollIntoViewIfNeeded();
    await UserWebsiteVerify(newPage, userwebsiteLocator);
})

test("More Explore Handyman Admin Panel Verify", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/explore-full-solution/");
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, adminpanelLocator);
})

test("More Explore Handyman Contact Us", async ({ page }) => {
    await page.goto(home_url);
    const bookdemocall = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        bookdemocall.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();

    const [newPage1] = await Promise.all([
        newPage.context().waitForEvent('page'),
        adminpanelLocator.click()
    ])
    const newPageUrl = newPage1.url();
    expect(newPageUrl).toBe("https://iqonic.tech/contact-us/");
})