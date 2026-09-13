import { expect } from '@playwright/test';
import { test } from '../fixture/fixture';

test.describe('Saucedemo - Login', () => {
    test('TC_LOGIN_001 - Log in with valid credentials and land on the Products page.', async ({ page, loginPage, productLandingPage }) => {
        await test.step('Step 1: Navigate to the login page', async () => {
            await page.goto('https://www.saucedemo.com/');
        });

        await test.step('Step 2: Enter valid username and password', async () => {
            await loginPage.enterUsername('standard_user');
            await loginPage.enterPassword('secret_sauce');
        });

        await test.step('Step 3: Click on the login button', async () => {
            await loginPage.clickLoginButton();
        });

        await test.step('Step 4: Verify that the user is redirected to the Products page', async () => {
            const isLoginSuccessful = await productLandingPage.VerifyProductPageTitle();
            expect(isLoginSuccessful).toBe(true);
        });
    });

    test('TC_LOGIN_002 - Log in with invalid credentials and verify error message.', async ({ page, loginPage, productLandingPage }) => {
        await test.step('Step 1: Navigate to the login page', async () => {
            await page.goto('https://www.saucedemo.com/');
        });

        await test.step('Step 2: Enter invalid username and password', async () => {
            await loginPage.enterUsername('invalid_user');
            await loginPage.enterPassword('invalid_password');
        });

        await test.step('Step 3: Click on the login button', async () => {
            await loginPage.clickLoginButton();
        });

        await test.step('Step 4: Verify that the user is not redirected to the Products page', async () => {
            const isLoginSuccessful = await productLandingPage.VerifyProductPageTitle();
            expect(isLoginSuccessful).toBe(false);
        });
    });
});