
import { Page } from '@playwright/test';
import { HomepageLocators } from '../locators';  

export class Homepage {
  constructor(private page: Page) {}

  
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  
  async clickLogin() {
    await this.page.click(HomepageLocators.loginLink);
  }

  
  async clickSignup() {
    await this.page.click(HomepageLocators.signupLink);
  }

  
  async clickPhonesCategory() {
    await this.page.click(HomepageLocators.phoneCategory);
  }

  
  async clickCartButton() {
    await this.page.click(HomepageLocators.cartButton);
  }
}
