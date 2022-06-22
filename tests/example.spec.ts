import {test, expect, Page} from '@playwright/test';

test.describe('Issues', () => {
    test('should see issue with number 76', async ({page}) => {

        await test.step("Открываем главную страницу", async () => {
            await page.goto('https://github.com/');
        })

        const repository = 'eroshenkoam/allure-example'
        await test.step("Ищем репозиторий: " + repository, async () => {
            const searchInput = page.locator('.header-search-input');

            await searchInput.click()
            await searchInput.fill(repository)
            await searchInput.press('Enter')
        })

        await test.step("Переходим в репозиторий по ссылке: " + repository, async () => {
            await page.locator('a:has-text("' + repository + '") >> nth=0').click()
        })

        await test.step("Открываем таб Issues", async () => {
            await page.locator("#issues-tab").click()
        })

        const issueNumber = '#76'
        await test.step("Проверяем что существует Issue с номером " + issueNumber, async () => {
            const issue = page.locator("text=" + issueNumber)
            await expect(issue).toBeVisible()
        })
    });
})