import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { loginPage } from '../pages/login';

describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    const login = new loginPage(page);
    await login.goto();
    await login.clickMasukHiperlink();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Should unable to login with invalid credential', async ({ page }) => {
    const login = new loginPage(page);
    await login.fillEmail('joko@oke.com');
    await login.fillPassword('correctt');
    await login.clickSignInButton();
    await expect(login.errorMessage).toBeVisible();
  });

  test('Error message should appear when email is not correct format', async ({ page }) => {
    const login = new loginPage(page);
    await login.fillEmail('joko@oke');
    await login.fillPassword('correctt');
    await login.clickSignInButton();
    await expect(login.invalidEmailMessage).toBeVisible();
  });

  test('Error message should appear when password is less than 8 characters', async ({ page }) => {
    const login = new loginPage(page);
    await login.fillEmail('joko@oke.com');
    await login.fillPassword('corre');
    await login.clickSignInButton();
    await expect(login.invalidPasswordMessage).toBeVisible();
  });

  test('Should able to login with valid credential', async ({ page }) => {
    const login = new loginPage(page);
    await login.fillEmail('aang@oke.com');
    await login.fillPassword('aangpass');
    await login.clickSignInButton();
    await expect(login.usernameTitle).toHaveText('Hi, aang!👋🏻');
    await expect(page.locator('body')).toMatchAriaSnapshot(`- text: Sign in success`);
  });
});
