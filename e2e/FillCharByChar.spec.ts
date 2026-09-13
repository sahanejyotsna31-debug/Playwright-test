import{ test,expect, Browser,Page,Locator,BrowserContext} from '@playwright/test';
import{webkit,chromium,firefox} from "@playwright/test";

test('Fill Charchter by Character Test',async() =>{

const browser :Browser = await chromium.launch({headless:false,channel:'chrome'});
const page: Page =await browser.newPage();
await page.goto("https://demoqa.com/automation-practice-form");
await page.locator("//input[@id='lastName']").focus();
await page.waitForTimeout(2000);
await page.locator("//input[@id='firstName']").pressSequentially("Ishan",{delay:1000});
await page.waitForTimeout(2000);
await page.locator("//input[@id='lastName']").pressSequentially("Sahane",{delay:1000});
await page.waitForTimeout(2000);


} )


test("open Company website",async()=>{
    const browser: Browser = await chromium.launch({headless:false,channel:'chrome'});
    const context: BrowserContext = await browser.newContext({
        viewport: { width: 1440, height: 900 }
    });
    const page: Page = await context.newPage();
    await page.goto("https://www.ilink-digital.com");
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(2000);
    console.log("Company website opened successfully");
    console.log("Page title is: " + await page.title());
   } )


   test("Amzone Idian website",async()=>{
    const browser: Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page: Page =await browser.newPage();
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='twotabsearchtextbox']").fill("washing machine");
    await page.waitForTimeout(2000);
    //await page.locator("//span[@class='a-truncate-cut'][contains(text(),'fnp Personalized Photo Table Clock with Stand - Cu')"];
    await page.locator('#targetElement').scrollIntoViewIfNeeded();
   })