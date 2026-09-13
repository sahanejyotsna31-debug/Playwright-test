import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

test('Select based Dropdown Test', async () => {

    
        const browser :Browser= await chromium.launch({headless:false,channel:'chrome'});
        const page: Page = await browser.newPage();
        await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');
        page.locator('css=#Contact_CountryCode').click();

        const CountryDropdown: Locator = page.locator('#Contact_CountryCode');

        await page.waitForTimeout(2000);
        await CountryDropdown.selectOption({value: 'Af'});

        await page.waitForTimeout(2000);
        await CountryDropdown.selectOption({value: 'BO'});


        })