import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.getByRole("button", { name: "Submit" }).first().click();
  await page.getByRole("searchbox", { name: "Search Amazon" }).fill("iphone");
  await page.getByRole("searchbox", { name: "Search Amazon" }).press("Enter");
  await page
    .getByRole("link", {
      name: "Apple iPhone 14 (Renewed), 128GB, Midnight - Unlocked",
    })
    .click();
  await page.getByRole("radio", { name: "512GB" }).click();
});
