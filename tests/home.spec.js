import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoHandymanVerify, TrustpilotVerify, UserAppAppStore, UserAppPlaystore, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Home User Website Verify", async ({ page }) => {
    await page.goto(home_url);
    const userwebsiteLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await UserWebsiteVerify(page, userwebsiteLocator);
})

test("Home Admin Panel Verify", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, adminpanelLocator);
})

test("Home Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLocator);
})

test("Home Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, trustpilotLocator);
})

test("Home On-demand", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/p[1]/a[1]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/for-business-owners/");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('How Can Handyman Help ');
})

test("Home Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await trustpilotLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, trustpilotLocator);
})

test("Home Unique features", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("//a[contains(text(),'unique features')]");
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

test("Home Handyman link verify", async ({ page }) => {
    await page.goto(home_url);
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Home Admin Panel Verify 2", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLocator);
})

test("Home Book a quick call 3", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await trustpilotLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, trustpilotLocator);
})

test("Home User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Home User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[4]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppAppStore(page, adminpanelLocator);
})

test("Home Handyman link verify 2", async ({ page }) => {
    await page.goto(home_url);
    const envantohandymanLinkLocator = page.locator("//a[@class='ha-comparison-table__btns-item--btn elementor-repeater-item-91f587a']");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Home One Time charge", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("//a[@class='ha-comparison-table__btns-item--btn elementor-repeater-item-863363a']");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/handyman-service-flutter-app-with-laravel-backend/");
})

test("Home Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("//div[@class='elementor-element elementor-element-67b98c3 elementor-widget__width-auto ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-md']");
    await ondemandLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, ondemandLocator);
})

test("Home Book a quick call 4", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLocator = page.locator("(//a[@class='elementor-button elementor-button-link elementor-size-md'])[10]");
    await trustpilotLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, trustpilotLocator);
})

test("Home Footer Provider", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//div[@class='elementor-element elementor-element-ece8a9f elementor-icon-list--layout-inline elementor-align-center elementor-mobile-align-center elementor-list-item-link-full_width ob-has-background-overlay elementor-widget elementor-widget-icon-list']//li[1]//a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/service-provider-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/service-provider-app/");
});

test("Home Footer User", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//div[@class='elementor-element elementor-element-ece8a9f elementor-icon-list--layout-inline elementor-align-center elementor-mobile-align-center elementor-list-item-link-full_width ob-has-background-overlay elementor-widget elementor-widget-icon-list']//li[2]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/client-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/client-app/");
});

test("Home Footer Frontend", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[3]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/user-website/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/user-website/");
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[4]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/laravel-admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/laravel-admin-panel/");
});

test("Home Footer Buy on envato", async ({ page }) => {
    await page.goto(home_url);
    const envantohandymanLinkLocator = page.locator("//div[@class='elementor-element elementor-element-3b20388 elementor-widget__width-auto ob-has-background-overlay elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-md']");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Home Support", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[8]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Support Desk')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Support Desk');
})

test("Home Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[9]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/cost-calculator/");
    const iqonicDesignSpanLocator = newPage.locator("//h3[contains(text(),'Calculate The Project Estimate Price')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Calculate The Project Estimate Price');
})

test("Home License", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[10]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//h2[contains(text(),'Licensing, Terms & More...')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Licensing, Terms & More...');
})

test("Home RoadMap", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[11]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/roadmap/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/roadmap/");
    const iqonicDesignSpanLocator = page.locator("//li[contains(text(),'Roadmap')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Roadmap');
});

test("Home Doc", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[12]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/handyman-service-doc/build/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Handyman Service')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Service');
})

test("Home Blog", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[13]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('All Items');
})

test("Home FAQ", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("(//li[@class='elementor-icon-list-item elementor-inline-item'])[14]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/faq/");
    const iqonicDesignSpanLocator = page.locator("//p[contains(text(),'Frequently Asked Questions')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Frequently Asked Questions');
});

test("Home Facebook", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("(//a[@aria-label='Facebook'])[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("Home Youtube", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("(//a[@aria-label='YouTube'])[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/c/IqonicDesign");
})

test("Home X-Twitter", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("(//a[@aria-label='Twitter'])[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Home Instagram", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("(//a[@aria-label='Instagram'])[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})
