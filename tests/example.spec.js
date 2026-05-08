// @ts-check
import { test, expect } from '@playwright/test';

test('form usage', async ({ page }) => {
  await page.goto('https://lms.threadqa.ru/xpath-practice-hub/basics');

  await page.locator(`//*[@id="user-name-input"]`).fill("Nikita");
  await expect(page.locator(`//*[@id="user-name-input"]`)).toHaveValue("Nikita");

  await page.locator(`//*[@id="user-email-input"]`).fill("nikitaadamonis@gmail.com");
  await expect(page.locator(`//*[@id="user-email-input"]`)).toHaveValue("nikitaadamonis@gmail.com");

  await page.locator(`//*[@id="user-password-input"]`).fill("qwerty123");
  await expect(page.locator(`//*[@id="user-password-input"]`)).toHaveValue("qwerty123");

  await page.locator(`//*[@id="user-comment-textarea"]`).fill("comment");
  await expect(page.locator(`//*[@id="user-comment-textarea"]`)).toHaveValue("comment");

  await page.locator(`//button[@data-testid='country-dropdown']`).click();
  await page.locator(`//div[@data-testid='country-russia']`).click();

  await page.keyboard.press('Escape');

  await page.locator(`//*[@id="practice-elements"]/div/div[1]/div[3]/div[11]/label[1]`).click();
  await expect(page.locator(`//*[@id="practice-elements"]/div/div[1]/div[3]/div[11]/label[1]//input`)).toBeChecked();

  await page.locator(`//*[@id="practice-elements"]/div/div[1]/div[3]/div[11]/label[3]`).click();
  await expect(page.locator(`//*[@id="practice-elements"]/div/div[1]/div[3]/div[11]/label[3]//input`)).toBeChecked();
});