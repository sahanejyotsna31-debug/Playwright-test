import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

test('Iframe Navigation', async () => {
        const browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const page = await browser.newPage();
      
        await page.goto("https://demoqa.com/frames");
        
        const visibleFrames =page.frameLocator('#frame1');

        console.log("Visible" + await visibleFrames.locator('#sampleHeading').isVisible());
}
)

test('Iframe Child Frame Navigation', async () => {
        const browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const page = await browser.newPage();
      
        await page.goto("https://demoqa.com/frames");
        
        const visibleFrames =page.frameLocator('#frame1');

        const visibleChildFrame =visibleFrames.frameLocator('iframe');

        console.log("Visible" + await visibleChildFrame.getByText('Child Iframe').isVisible());
}
)

test('Iframe Child Frame Navigation from Modal Dialogs', async () => {
        const browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const page = await browser.newPage();
      
        await page.goto("https://demoqa.com/modal-dialogs");
        
        const visibleFrames =page.frameLocator('#frame1');

        const visibleChildFrame =visibleFrames.frameLocator('iframe');

        console.log("Visible" + await visibleChildFrame.getByText('Child Iframe').isVisible());
}
)


test('Model Dialog', async () => {
        const browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const page = await browser.newPage();
      
        await page.goto("https://demoqa.com/modal-dialogs");
        
        
        await page.locator('#showSmallModal').click();
        await page.waitForTimeout(2000);

        // Get text inside dialog
10
        const dialogText = await page.locator('.modal-body').textContent();
       console. log(dialogText);
11
        //await page.on("dialog",async dialog =>{


        //    console.log(dialog.message());
       // })
        }
)
