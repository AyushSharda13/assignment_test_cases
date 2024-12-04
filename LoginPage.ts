
import { Page } from '@playwright/test';
import { LoginLocators } from '../locators'; 
export class LoginPage {
  constructor(private page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  
  async login(username: string, password: string) {
    await this.page.fill(LoginLocators.usernameField, username);
    await this.page.fill(LoginLocators.passwordField, password);
    await this.page.click(LoginLocators.loginButton);
  }

  
  async verifyLoginSuccess() {
    const userProfile = this.page.locator(LoginLocators.userProfile);
    await expect(userProfile).toBeVisible();
  }

  
  async verifyLoginError() {
    const errorMessage = this.page.locator(LoginLocators.loginErrorMessage);
    await expect(errorMessage).toBeVisible();
  }
}
