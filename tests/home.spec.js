const { test, expect } = require('@playwright/test');
const { UserWebsiteVerify, AdminPanelVerify, TrustpilotVerify, EnvantoHandymanVerify, UserAppPlaystore, UserAppAppStore } = require('./common');
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
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/ul[1]/li[1]/a[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Home One Time charge", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/handyman-service-flutter-app-with-laravel-backend/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Handyman Service Flutter App with Laravel Backend')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Service Flutter App with Laravel Backend');
})

test("Home Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await ondemandLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        ondemandLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://tidycal.com/iqonicdesign/handyman-demo-call");
})

test("Home Footer Provider", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]/span[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/service-provider-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/service-provider-app/");
    const iqonicDesignSpanLocator = page.locator("//p[contains(text(),'Provider App is the primary interface for all Serv')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Provider App is the primary interface for all Service Providers listed on the platform. They can manage Services, Handymen, Earning, Bookings, and much more.');
});

test("Home Footer User", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]/span[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/client-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/client-app/");
    const iqonicDesignSpanLocator = page.locator("//p[contains(text(),'User App of Flutter on-demand home services app wi')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('User App of Flutter on-demand home services app with complete solution is the primary interfaces that your end clients will use to browse services, book Handyman, make payments and more.');
});

test("Home Footer Frontend", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[3]/a[1]/span[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/user-website/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/user-website/");
    const iqonicDesignSpanLocator = page.locator("//p[contains(text(),'Handyman Flutter on-demand home services app with ')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Flutter on-demand home services app with complete solution is a truly universal solution. For all the users who prefer to use big screen (computers/laptop) can book their services from User Website.');
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/a[1]/span[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/features/laravel-admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/features/laravel-admin-panel/");
    const iqonicDesignSpanLocator = page.locator("//p[contains(text(),'Laravel Admin panel for Flutter home service app i')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Laravel Admin panel for Flutter home service app is the heart of the solution. It gives full access and control of the platform to admin.');
});

test("Home Footer Buy on envato", async ({ page }) => {
    await page.goto(home_url);
    const envantohandymanLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/a[1]");
    await envantohandymanLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoHandymanVerify(page, envantohandymanLinkLocator);
})

test("Home Support", async ({ page }) => {
    await page.goto(home_url);
    const ondemandLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]/span[1]");
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
    const ondemandLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]/span[1]");
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
    const ondemandLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/ul[1]/li[3]/a[1]/span[1]");
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
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/ul[1]/li[4]/a[1]/span[1]");
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
    const ondemandLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/ul[1]/li[5]/a[1]/span[1]");
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
    const ondemandLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/ul[1]/li[6]/a[1]/span[1]");
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
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/ul[1]/li[7]/a[1]/span[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://handyman.iqonic.design/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://handyman.iqonic.design/faq/");
    const iqonicDesignSpanLocator = page.locator("//p[contains(text(),'Frequently Asked Questions')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Frequently Asked Questions');
});