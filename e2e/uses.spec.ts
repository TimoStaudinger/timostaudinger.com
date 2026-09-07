import {test, expect} from '@playwright/test'

test.describe('Uses page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/uses')
  })

  test('renders the page header', async ({page}) => {
    await expect(page.getByRole('heading', {name: 'Uses'})).toBeVisible()
    await expect(page.getByText(/Software and Hardware/)).toBeVisible()
  })

  test('renders editor section', async ({page}) => {
    await expect(page.getByRole('heading', {name: 'Editor'})).toBeVisible()
    await expect(page.getByRole('link', {name: 'IntelliJ IDEA'})).toBeVisible()
  })

  test('renders hardware section', async ({page}) => {
    await expect(page.getByRole('heading', {name: 'Hardware'})).toBeVisible()
  })

  test('renders desktop apps section', async ({page}) => {
    await expect(page.getByRole('heading', {name: 'Desktop Apps'})).toBeVisible()
  })

  test('external links open correctly', async ({page}) => {
    const ideaLink = page.getByRole('link', {name: 'IntelliJ IDEA'})
    await expect(ideaLink).toHaveAttribute('href', 'https://www.jetbrains.com/idea/')
  })

  test('visual regression', async ({page}) => {
    await expect(page).toHaveScreenshot('uses.png', {
      maxDiffPixelRatio: 0.01,
      fullPage: true,
    })
  })
})
