import { test, expect, Page } from '@playwright/test';

test.describe('Issues', () => {
  test('should see issue with number 76', async ({page}) => {
    await page.goto('https://github.com/');

    const searchInput = page.locator('.header-search-input');

    await searchInput.click()
    await searchInput.fill('eroshenkoam/allure-example')
    await searchInput.press('Enter')

    await page.locator('a:has-text("eroshenkoam/allure-example") >> nth=0').click()

    await page.locator("#issues-tab").click()

    const issue = page.locator("text=#76")
    await expect(issue).toBeVisible()
  });
})