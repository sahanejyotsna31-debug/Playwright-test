import{test,expect,Browser,Page,Locator} from '@playwright/test';    
import {webkit,chromium,firefox} from '@playwright/test';

test('Locator Test', async ()=>{

    //Broweser Launch
    //Opening Pages to launch web url
    //Defining Locators     
    const browser: Browser = await chromium.launch({headless:false});
    const page: Page = await browser.newPage(); 
    await page.goto('https://www.saucedemo.com/');
    const username: Locator = page.locator('#user-name');
    const password: Locator = page.locator('#password');    
    const loginButton: Locator = page.locator('#login-button');
    await username.fill('standard_user');
    await password.fill('secret_sauce');    
    await loginButton.click();
    let title = await page.title();
    console.log("Title is "  +title );
    expect(title).toBe('Swag Labs');
    await browser.close();    
}
)