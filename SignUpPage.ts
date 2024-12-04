
import { Page } from '@playwright/test';
import { SignUpLocators } from '../locators';  
export class SignUpPage {
  constructor(private page: Page) {}


  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  
  async signUp(username: string, password: string, confirmPassword: string) {
    await this.page.fill(SignUpLocators.usernameField, username);
    await this.page.fill(SignUpLocators.passwordField, password);
    await this.page.fill(SignUpLocators.confirmPasswordField, confirmPassword);
    await this.page.click(SignUpLocators.signUpButton);
  }

  
  async verifySignUpSuccess() {
    const successMessage = this.page.locator(SignUpLocators.signUpSuccessMessage);
    await expect(successMessage).toBeVisible();
  }

  async verifyPasswordMismatchError() {
    const errorMessage = this.page.locator(SignUpLocators.passwordMismatchMessage);
    await expect(errorMessage).toBeVisible();
  }
}

