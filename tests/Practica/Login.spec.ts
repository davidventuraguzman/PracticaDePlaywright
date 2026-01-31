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

  await page.getByRole("button", { name: "Book a Free Demo" }).click();
  await page.getByRole("textbox", { name: "Full Name" }).fill("David");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("david.02.vg@gmail.com");
  await page.getByRole("textbox", { name: "Contact" }).fill("123456789");

  const arrayconutry = await page.getByRole("combobox", { name: "Country" });

  const countries = await arrayconutry.allTextContents();

  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  const country = await page.getByRole("combobox", { name: "Country" });
  await country.fill(randomCountry);

  console.log(`País seleccionado: ${randomCountry}`);
});
