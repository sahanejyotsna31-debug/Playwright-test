import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium, firefox } from '@playwright/test';

test('File Upload Test', async () => {
 
const browser :Browser= await chromium.launch({headless:false,channel:'chrome'});
const page: Page = await browser.newPage();
await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
await page.waitForTimeout(2000);
await page.locator("//input[@name='upfile']").setInputFiles("C:\\Users\\Jyotsna.sahane\\OneDrive - iLink Systems Inc\\Documents\\Image (4).jpg");
await page.waitForTimeout(3000);

await browser.close();

})

test('Multiple File Upload Test', async () => {
 
const browser :Browser= await chromium.launch({headless:false,channel:'chrome'});
const page: Page = await browser.newPage();
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
await page.waitForTimeout(2000);
await page.locator("//input[@name='filesToUpload']").setInputFiles(["C:\\Users\\Jyotsna.sahane\\OneDrive - iLink Systems Inc\\Documents\\Image (4).jpg","C:\\Users\\Jyotsna.sahane\\OneDrive - iLink Systems Inc\\Documents\\book1.xlsx"]);
await page.waitForTimeout(15000);
console.log("Deleting Uploaded Files");
await page.locator("//input[@name='filesToUpload']").setInputFiles([]);
await page.waitForTimeout(15000);
await browser.close();

})

