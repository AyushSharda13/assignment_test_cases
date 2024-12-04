
import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';

test.describe('Signup Page Tests', () => {
  let signUpPage: SignUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
    await signUpPage.navigateTo('https://www.demoblaze.com/index.html');
  });

  test('Signup with valid credentials', async ({ page }) => {
    await signUpPage.signUp('newUser', 'validPassword', 'validPassword');
    await signUpPage.verifySignUpSuccess();
  });

  test('Signup with password mismatch', async ({ page }) => {
    await signUpPage.signUp('newUser', 'validPassword', 'mismatchPassword');
    await signUpPage.verifyPasswordMismatchError();
  });
});
