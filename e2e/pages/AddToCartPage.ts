import type { Locator , Page } from "@playwright/test";
import { BasePage } from "./BasePage";

 export class CartPage extends BasePage {
    readonly AddtoCartButtons: Record<string, Locator>;
    readonly RemoveFromCartButtons: Record<string, Locator>;
    readonly CartBadge: Locator;

    constructor(page: Page) {
        super(page);
        this.AddtoCartButtons = {
            backpack: page.locator('#add-to-cart-sauce-labs-backpack'),
            bikeLight: page.locator('#add-to-cart-sauce-labs-bike-light'),
            boltTShirt: page.locator('#add-to-cart-sauce-labs-bolt-t-shirt'),
        };
        this.RemoveFromCartButtons = {
            backpack: page.locator('#remove-sauce-labs-backpack'),
            bikeLight: page.locator('#remove-sauce-labs-bike-light'),
            boltTShirt: page.locator('#remove-sauce-labs-bolt-t-shirt'),
        };
        this.CartBadge = page.locator('.shopping_cart_badge');
    }

    async addToCartBasedOnProductName(...productNames: string[]): Promise<void> {
        for (const productName of productNames) {
            const addToCartButton = this.AddtoCartButtons[productName];
            if (!addToCartButton) {
                throw new Error(`Unknown product: ${productName}`);
            }

            await addToCartButton.click();
        }

        await this.CartBadge.waitFor({ state: 'visible' });
    }

    async removeFromCart(productName: string): Promise<void> {
        const removeButton = this.RemoveFromCartButtons[productName];
        if (!removeButton) {
            throw new Error(`Unknown product: ${productName}`);
        }

        await removeButton.click();
    }

    async getCartBadgeCount(): Promise<number> {
  const badge = this.page.locator('.shopping_cart_badge');

  if (await badge.count() === 0) {
    return 0;
  }

  return Number(await badge.innerText());
}
 }