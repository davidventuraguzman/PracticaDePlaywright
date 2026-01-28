import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test("test ejemplo", async ({ page }) => {
  await page.goto("https://amazon.com");
  await page.locator('input[id="twotabsearchtextbox"]').fill("iphone");
  await page.keyboard.press("Enter");

  await expect(
    page.locator("//span[contains(@class, 's-latency-cf-section')]"),
  ).toBeVisible();
  // await page.pause();
  const titles = await page
    .locator(
      "//div[contains(@class, 's-result-list')] //div[contains(@class, 'sg-col-12-of-16')]//h2",
    )
    .allInnerTexts();
  // console.log("se logro mira: ", titles);
  // for (let title of titles) {
  //   console.log("se logro mira: ", title);
  //
});
