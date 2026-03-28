import {test, expect} from '@playwright/test'

test.describe('Navigation', () => {
  test('navigate from home to uses', async ({page}) => {
    await page.goto('/')
    await page.getByRole('link', {name: 'Uses'}).click()
    await expect(page).toHaveURL('/uses')
    await expect(page.getByRole('heading', {name: 'Uses'})).toBeVisible()
  })

  test('navigate from uses back to home via title', async ({page}) => {
    await page.goto('/uses')
    await page.getByRole('link', {name: 'Timo M. Staudinger'}).click()
    await expect(page).toHaveURL('/')
    await expect(page.getByRole('heading', {name: /Hi! I'm Timo/})).toBeVisible()
  })

  test('404 page for unknown routes', async ({page}) => {
    const response = await page.goto('/nonexistent-page')
    expect(response?.status()).toBe(404)
  })
})
