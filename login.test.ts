
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://www.demoblaze.com/index.html');
  });

  test('Login with valid credentials', async ({ page }) => {
    await loginPage.login('validUsername', 'validPassword');
    await loginPage.verifyLoginSuccess();
  });

  test('Login with invalid credentials', async ({ page }) => {
    await loginPage.login('invalidUsername', 'invalidPassword');
    await loginPage.verifyLoginError();
  });
});
