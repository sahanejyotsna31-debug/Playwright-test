import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

test('Screenshot Test', async () => {

    
        const browser :Browser= await chromium.launch({headless:false,channel:'chrome'});
        const page: Page = await browser.newPage();
        
         await page.goto("https://www.youtube.com/");
       
      const searchBox = page.getByRole('combobox', { name: 'Search' });
      await searchBox.fill("Playwright");

// element screenshot
       await searchBox.screenshot({ path: "elementSS.png" });

// page Screenshot
          await page.screenshot({ path: "pageSS.png" })
 
          await page.screenshot({ path: "fullPageSS.png", fullPage: true });

       await browser.close();

});