const { expect } = require('@playwright/test');

const UserWebsiteVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/handyman/");
    const userwebsiteLocator = newPage.locator("//body/main[@id='landing-app']/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]");
    const verifytext = await userwebsiteLocator.textContent();
    expect(verifytext).toContain(' Your Instant Link to the Perfect Handyman Service ');
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
    const trustpilotLocator = newPage.locator("//body/div[@id='__next']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/h1[1]/span[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('IQONIC DESIGN');
    return newPage;
}

const EnvantoHandymanVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Handyman Service - On-Demand Home Service Flutter App with ChatGPT Integration');
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
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/handyman-service-for-provider/id1596025324");
    const trustpilotLocator = newPage.locator("//header/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Handyman Service for Provider');
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

module.exports = { UserWebsiteVerify, AdminPanelVerify, TrustpilotVerify, EnvantoHandymanVerify, UserAppPlaystore, UserAppAppStore, HandymanAppPlaystore, HandymanAppAppStore, AdminAppPlaystore, EnvantoAdminAppVerify, AdminAppAppStore };