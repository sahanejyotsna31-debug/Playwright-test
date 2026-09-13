import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

test('BigBasket Selection Test', async () => {
        const browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const page = await browser.newPage();

        await page.goto('https://www.bigbasket.com/', { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(2000); // Wait for 5 seconds to ensure the page is fully loaded
        await page.getByText('Category').last().click();
        await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the menu is fully loaded

       await page.locator('a[href*="food-court"]').last().hover();
        await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the Beauty & Hygiene menu is fully loaded
        //await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the submenu is fully loaded

        await page.getByText('Breakfast', { exact: true }).hover()
        await page.waitForTimeout(2000); 
        await page.getByText('English Breakfast', { exact: true }).click();
        await page.waitForLoadState('networkidle');
        
        console.log(await page.url());
      //  await browser.close();
});