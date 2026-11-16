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
      // Highlights are brief, so record each one as it happens instead of
      // polling for it.
      await page.evaluate(() => {
        const seen: string[] = []
        ;(window as unknown as {seen: string[]}).seen = seen
        new MutationObserver(() => {
          const on = document.querySelector('.syl.on .text')?.textContent
          if (on && seen[seen.length - 1] !== on) seen.push(on)
        }).observe(document.querySelector('.name')!, {
          subtree: true,
          attributes: true,
          attributeFilter: ['class'],
        })
      })

      const button = page.getByRole('button', {name, exact: true})
      await button.click()
      await expect(button).toBeDisabled()
      await expect(button).toBeEnabled({timeout: 5000})
      await expect(page.locator('.syl.on')).toHaveCount(0)

      const seen = await page.evaluate(() => (window as unknown as {seen: string[]}).seen)
      expect(seen).toEqual(['Ti', 'mo', 'Stau', 'ding', 'er'])
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
