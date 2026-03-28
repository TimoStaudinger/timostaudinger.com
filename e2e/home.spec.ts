import {test, expect} from '@playwright/test'

test.describe('Home page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')
  })

  test('renders the welcome heading', async ({page}) => {
    await expect(page.getByRole('heading', {name: /Hi! I'm Timo/})).toBeVisible()
  })

  test('renders the tagline', async ({page}) => {
    await expect(page.getByText(/I live in NYC/)).toBeVisible()
  })

  test('renders the profile image', async ({page}) => {
    const img = page.getByAltText("Timo's face")
    await expect(img).toBeVisible()
  })

  test('has navigation with site title', async ({page}) => {
    await expect(page.getByRole('link', {name: 'Timo M. Staudinger'})).toBeVisible()
  })

  test('has link to Uses page', async ({page}) => {
    await expect(page.getByRole('link', {name: 'Uses'})).toBeVisible()
  })

  test('renders social links', async ({page}) => {
    await expect(page.locator('a[href*="github.com"]')).toBeVisible()
    await expect(page.locator('a[href*="linkedin.com"]')).toBeVisible()
  })

  test('visual regression', async ({page}) => {
    await expect(page).toHaveScreenshot('home.png', {maxDiffPixelRatio: 0.01})
  })
})
