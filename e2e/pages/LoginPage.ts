import type { Locator , Page } from "@playwright/test";
import { BasePage } from "./BasePage";

 export class LoginPage extends BasePage {
    readonly UsernameInput: Locator;
    readonly PasswordInput: Locator;
    readonly LoginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.UsernameInput = page.getByRole('textbox', { name: 'Username' });
        this.PasswordInput = page.getByRole('textbox', { name: 'Password' });
        this.LoginButton = page.getByRole('button', { name: 'Login' });
        
    }

    async login(username: string, password: string): Promise<void> {
        await this.UsernameInput.fill(username);
        await this.PasswordInput.fill(password);
        await this.LoginButton.click();
    }

    async enterUsername(username: string): Promise<void> {
        await this.UsernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.PasswordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.LoginButton.click();
    }
    
    async isLoginSuccessful(): Promise<boolean> {
        // Implement logic to check if login was successful, e.g., by checking for a specific element on the page
        // For example, you can check if a logout button or user profile is visible after login
       
        return await this.page.locator('selector-for-success-element').isVisible();
    }


}