import {test, expect} from '@playwright/test'

test.describe('ICE auth page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/ice/auth')
  })

  test('renders the auth form', async ({page}) => {
    await expect(page.getByRole('heading', {name: /In Case of Emergency/})).toBeVisible()
    await expect(page.getByPlaceholder('Password')).toBeVisible()
    await expect(page.getByRole('button', {name: 'Continue'})).toBeVisible()
  })

  test('password field is numeric input mode', async ({page}) => {
    const input = page.getByPlaceholder('Password')
    await expect(input).toHaveAttribute('type', 'password')
    await expect(input).toHaveAttribute('inputmode', 'numeric')
  })

  test('rejects invalid PIN', async ({page}) => {
    await page.getByPlaceholder('Password').fill('0000')
    await page.getByRole('button', {name: 'Continue'}).click()
    await page.waitForURL(/\/ice\/auth/)
  })

  test('visual regression', async ({page}) => {
    await expect(page).toHaveScreenshot('ice-auth.png', {maxDiffPixelRatio: 0.01})
  })
})
