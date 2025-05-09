import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { loginPage } from '../pages/login';
import { searchPage } from '../pages/search';

describe('Search', () => {
    test.beforeEach(async ({ page }) => {
        const login = new loginPage(page);
        await login.goto();
    });
    
      test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Should able to search with full keyword', async ({ page }) => {
        const search = new searchPage(page);
        await search.fillSearchInput('cika');
        await expect(search.searchResult).toContainText('Cika');
    });

    test('Should able to search with partial keyword', async ({ page }) => {
        const search = new searchPage(page);
        await search.fillSearchInput('ika');
        await expect(search.searchResult).toContainText('ika');
    });

    test('Should able to search with empty keyword', async ({ page }) => {
        const search = new searchPage(page);
        await search.fillSearchInput('');
        await expect(search.searchResult).toContainText('');
    });
    
    test('Should able to search with special character', async ({ page }) => {
        const search = new searchPage(page);
        await search.fillSearchInput('!@#$%^&*()_+');
        await expect(search.searchResult).toContainText('Tidak ada hasil pencarian');
    });
    
    test('Should able to search with number', async ({ page }) => {
        const search = new searchPage(page);
        await search.fillSearchInput('1234567890');
        await expect(search.searchResult).toContainText('Tidak ada hasil pencarian');
    });
});
