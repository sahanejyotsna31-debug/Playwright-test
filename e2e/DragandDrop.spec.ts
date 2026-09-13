import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

test('Drag and Drop Test', async () => {

    
        const browser :Browser= await chromium.launch({headless:false,channel:'chrome'});
        const page: Page = await browser.newPage();
        await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
        await page.waitForTimeout(2000);
       // await page.locator('#draggable').dragTo(page.locator('#droppable'));
        //await page.waitForTimeout(2000);
        await page.locator('#draggable').hover();
        await page.mouse.down();
        await page.locator('#droppable').hover();
        await page.mouse.up();
        await browser.close();
        } )