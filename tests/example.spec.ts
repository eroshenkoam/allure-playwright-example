import {test, expect, Page} from '@playwright/test';
import {allure} from "allure-playwright"

test.describe('Issues', () => {
    test('should see issue with number 76', async ({page}) => {
        allure.owner("eroshenkoam")
        allure.link({url: 'https://github.com', name: 'Тестинг'})
        allure.issue({url: 'https://github.com/eroshenkoam/allure-playwright-example/issues/1', name: "Bug #1"})
        allure.feature("Issue в репозитории")
        allure.story("Поиск Issues в существующем репозитории")

        const repository = 'eroshenkoam/allure-example'
        const issueNumber = '#76'

        await test.step("Открываем главную страницу", async () => {
            await page.goto('https://github.com/');
        })
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
        await test.step("Проверяем что существует Issue с номером " + issueNumber, async () => {
            const issue = page.locator("text=" + issueNumber)
            await expect(issue).toBeVisible()
        })
    });

    test('should see issue with number 74', async ({page}) => {
        allure.owner("eroshenkoam")
        allure.link({url: 'https://github.com', name: 'Тестинг'})
        allure.issue({url: 'https://github.com/eroshenkoam/allure-playwright-example/issues/1', name: "Bug #1"})
        allure.feature("Issue в репозитории")
        allure.story("Поиск Issues в существующем репозитории")

        const repository = 'eroshenkoam/allure-example'
        const issueNumber = '#74'

        await test.step("Открываем главную страницу", async () => {
            await page.goto('https://github.com/');
        })
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
        await test.step("Проверяем что существует Issue с номером " + issueNumber, async () => {
            const issue = page.locator("text=" + issueNumber)
            await expect(issue).toBeVisible()
        })
    });
})