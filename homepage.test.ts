
import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/Homepage';

test.describe('Homepage Tests', () => {
  let homepage: Homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    await homepage.navigateTo('https://www.demoblaze.com/index.html');
  });

  test('Navigate to Login page', async ({ page }) => {
    await homepage.clickLogin();
    await expect(page).toHaveURL(/login/); 
  });

  test('Navigate to Signup page', async ({ page }) => {
    await homepage.clickSignup();
    await expect(page).toHaveURL(/signup/); 
  });

  test('Navigate to Phones category', async ({ page }) => {
    await homepage.clickPhonesCategory();
    await expect(page).toHaveURL(/#phones/); 
  });

  test('Navigate to Cart page', async ({ page }) => {
    await homepage.clickCartButton();
    await expect(page).toHaveURL(/#cart/); 
  });
});

