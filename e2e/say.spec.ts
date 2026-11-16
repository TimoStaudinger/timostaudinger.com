import {test, expect} from '@playwright/test'

test.describe('Say page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/say')
  })

  test('renders the page header', async ({page}) => {
    await expect(page.getByRole('heading', {name: 'How to say my name'})).toBeAttached()
    await expect(page.getByRole('img', {name: /pronounced TEE-moh SHTOW-ding-uh/})).toBeVisible()
  })

  test('shows the phonetic spelling', async ({page}) => {
    await expect(page.getByText('/ˈtiːmo ˈʃtaʊ̯dɪŋɐ/')).toBeVisible()
    await expect(page.getByText('Close enough is great.')).toBeVisible()
  })

  test('has play controls', async ({page}) => {
    await expect(page.getByRole('button', {name: 'Play'})).toBeEnabled()
    await expect(page.getByRole('button', {name: 'Slowly'})).toBeEnabled()
  })

  for (const name of ['Play', 'Slowly']) {
    test(`plays the ${name.toLowerCase()} recording with highlights`, async ({page}) => {
      const button = page.getByRole('button', {name, exact: true})
      await button.click()
      await expect(button).toBeDisabled()
      await expect(page.locator('.syl.on')).toHaveText(/Stau/, {timeout: 3000})
      await expect(button).toBeEnabled({timeout: 4000})
      await expect(page.locator('.syl.on')).toHaveCount(0)
    })
  }

  test('has a dedicated preview image for link unfurls', async ({page}) => {
    const ogImage = page.locator('meta[property="og:image"]')
    await expect(ogImage).toHaveAttribute('content', /\/say\/opengraph-image/)
  })

  test('visual regression', async ({page}) => {
    await expect(page).toHaveScreenshot('say.png', {
      maxDiffPixelRatio: 0.01,
      fullPage: true,
    })
  })
})
