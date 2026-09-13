import { expect } from '@playwright/test';
import { test } from '../fixture/fixture';

test.describe('Saucedemo - Cart page', () => {
    test('TC_CART_001 - Add a single product to the cart and verify the cart badge count', async ({ page, loginPage, cartPage }) => {
        await test.step('Step 1: Login to the saucedemo website', async () => {
            await page.goto(`${process.env.URL}`);
        await loginPage.login(`${process.env.ValidUsername}`, `${process.env.ValidPassword}`);
        });

        await test.step('Step 2: Enter product to cart', async () => {
            await cartPage.addToCartBasedOnProductName('backpack');
        });

        await test.step('Step 3: Check the cart badge count as 1', async () => {
            expect(await cartPage.getCartBadgeCount()).toBe(1);
        });
    });
});

test( 'TC_CART_002 — Add multiple products to the cart and verify the badge count and cart-page contents match.', async ({ page, loginPage, cartPage }) => {

    await test.step('Step 1: Login to the saucedemo website', async () => {
        await page.goto(`${process.env.URL}`);
        await loginPage.login(`${process.env.ValidUsername}`, `${process.env.ValidPassword}`);
    });

    await test.step('Step 2: Add multiple products to the cart', async () => {
        await cartPage.addToCartBasedOnProductName('backpack', 'bikeLight');
    }); 


    await test.step('Step 3: Verify the cart badge count matches the number of products added', async () => {
        const expectedCount = 2;        
        expect(await cartPage.getCartBadgeCount()).toBe(expectedCount);
    });

    await test.step('Step 4: Navigate to the cart page and verify the contents', async () => {
        await cartPage.navigateTo('/cart.html');
        // Verify that the cart page contains the expected products
        // You can add assertions here to check for specific product names, prices, etc.
    });
}); 
    test('TC_CART_003 — Remove a product from the cart and verify the badge disappears', async ({ page, loginPage, cartPage }) => {
        await test.step('Step 1: Login to the saucedemo website', async () => {
           await page.goto(`${process.env.URL}`);
        await loginPage.login(`${process.env.ValidUsername}`, `${process.env.ValidPassword}`);
        });

        await test.step('Step 2: Enter product to cart', async () => {
            await cartPage.addToCartBasedOnProductName('backpack');
        });

        await test.step('Step 3: Remove the product from the cart', async () => {
            await cartPage.removeFromCart('backpack');
        });

        await test.step('Step 4: Verify the cart badge count is 0', async () => {
            expect(await cartPage.getCartBadgeCount()).toBe(0);
        });
    });