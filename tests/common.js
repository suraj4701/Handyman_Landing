const { expect } = require('@playwright/test');

const UserWebsiteVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/handyman/");
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/handyman/login");
    const adminpanelLocator = newPage.locator("//button[contains(text(),'Login')]");
    const verifytext = await adminpanelLocator.textContent();
    expect(verifytext).toContain('Login');
    return newPage;
}

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    return newPage;
}

const EnvantoHandymanVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Service - On-Demand Home Services Solution (Get 2 Apps, Customer Website & Admin Panel)');
    return newPage;
}

const UserAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.servicebooking");
    const trustpilotLocator = newPage.locator("//span[contains(text(),'Handyman Service User')]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Handyman Service User');
    return newPage;
}

const UserAppAppStore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/handyman-service-user/id1591427211");
    const trustpilotLocator = newPage.locator("//header/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Handyman Service User');
    return newPage;
}

const HandymanAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.provider");
    const trustpilotLocator = newPage.locator("//span[contains(text(),'Provider Handyman App')]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Provider Handyman App');
    return newPage;
}

const HandymanAppAppStore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/provider-handyman/id1596025324");
    return newPage;
}

const AdminAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.handyman.admin");
    const trustpilotLocator = newPage.locator("//span[contains(text(),'Handyman Service Admin App')]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Handyman Service Admin App');
    return newPage;
}

const AdminAppAppStore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/in/app/handyman-admin-app/id6444930648");
    const trustpilotLocator = newPage.locator("//header/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Handyman Admin App');
    return newPage;
}

const EnvantoAdminAppVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Admin App [Add-on]');
    return newPage;
}

const BookcallVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])

    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://handyman.iqonic.design/handyman-demo-call/");
    return newPage;
}

const CommonLinkVerify = async (page, locator, link) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe(link);
    return newPage;
}

module.exports = { UserWebsiteVerify, AdminPanelVerify, BookcallVerify, TrustpilotVerify, EnvantoHandymanVerify, UserAppPlaystore, UserAppAppStore, HandymanAppPlaystore, HandymanAppAppStore, AdminAppPlaystore, EnvantoAdminAppVerify, AdminAppAppStore, CommonLinkVerify };