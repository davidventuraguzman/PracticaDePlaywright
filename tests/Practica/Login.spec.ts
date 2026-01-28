import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.realworld.io/#/");

  await page.locator("//a[@href='#/register']").click();

  await expect(page.locator("//div[@class='row']")).toBeVisible();

  await page.getByPlaceholder("Username").fill("david");

  await page.getByPlaceholder("Email").fill("david.02.vg@gmail.com");

  await page.getByPlaceholder("Password").fill("123456");

  await page.locator("//button[@type='submit']").click();

  await page.pause();
});

test("testOrange", async ({ page }) => {
  await page.goto("https://www.orangehrm.com/");

  await page.pause();
});
