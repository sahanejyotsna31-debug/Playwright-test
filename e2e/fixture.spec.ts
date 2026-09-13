import{test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test';    
import {webkit,chromium,firefox} from '@playwright/test';

test('Login Test', async ({ page })=>{

   await page.goto('https://www.saucedemo.com/');
   await page.goto('https://www.saucedemo.com/');
  const username1: Locator = page.locator('#user-name');
  const password1: Locator = page.locator('#password');
  const loginButton1: Locator = page.locator('#login-button');
  await username1.fill('standard_user');
  await password1.fill('secret_sauce');  

  await page.waitForTimeout(5000);
  await loginButton1.click();
  let title1 = await page.title();
  console.log(title1);
  expect(title1).toBe('Swag Labs');
  await page.waitForTimeout(5000);  
}
)