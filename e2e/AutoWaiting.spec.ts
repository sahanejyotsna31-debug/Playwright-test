import{test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test'
import{webkit,chromium,firefox} from '@playwright/test'

//common configuration is applicable for all test inside the spec
test.use({actionTimeout:1000});
test('Auto waiting',async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page: Page =await browser.newPage();
  //default timeout ==30s
  //below changing  = 10s
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("cwefsredfgd").click({timeout:5000});
} )