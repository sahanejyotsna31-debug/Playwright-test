import { expect } from '@playwright/test';
import { test } from '../fixture/fixture';

test.describe('Saucedemo - Cart page', () => {
    test('TC_CART_001 - Add a single product to the cart and verify the cart badge count', async ({ page, loginPage, cartPage }) => {
        await test.step('Step 1: Login to the saucedemo website', async () => {
            await page.goto('https://www.saucedemo.com/');
            await loginPage.login('standard_user', 'secret_sauce');
        });

        await test.step('Step 2: Enter product to cart', async () => {
            await cartPage.addToCartBasedOnProductName();
        });

        await test.step('Step 3: Check the cart badge count as 1', async () => {
            expect(await cartPage.getCartBadgeCount()).toBe(1);
        });
    });
});

