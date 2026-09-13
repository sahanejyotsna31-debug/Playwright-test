import{test,expect,Browser,Page,Locator} from '@playwright/test';    
import {webkit,chromium,firefox} from '@playwright/test';

test('Login Test', async ()=>{
    //Broweser Launch
    //Opening Pages to launch web url
    //Defining Locators
    //Clikc  locator
 const browser: Browser = await chromium.launch({headless:false});
  const page1: Page = await browser.newPage();
 const page2: Page = await browser.newPage();

  await page1.goto('https://www.saucedemo.com/');
  await page2.goto('https://www.saucedemo.com/');
  const username1: Locator = page1.locator('#user-name');
  const password1: Locator = page1.locator('#password');
 const loginButton1: Locator = page1.locator('#login-button');
  await username1.fill('standard_user');
  await password1.fill('secret_sauce');  

  await loginButton1.click();
  let title1 = await page1.title();
  console.log(title1);
  expect(title1).toBe('Swag Labs');
 // await browser.close();   
  
    const username2: Locator = page2.locator('#user-name');
  const password2: Locator = page2.locator('.form_group input[type="password"]');
  const loginButton2: Locator = page2.locator('#login-button');

  await username2.fill('standard_user');
  await password2.fill('secret_sauce');  

  await page2.waitForTimeout(5000);
  await loginButton2.click();
  let title = await page2.title();
  console.log(title);
  expect(title).toBe('Swag Labs');
  await browser.close();   
  


});




