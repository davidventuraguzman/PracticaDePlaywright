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

  await page.getByRole("textbox", { name: "Phone Number" }).fill("123456789");

  //logica para el country
  const countryDropdown = page.locator("#Form_getForm_Country");
  const count = await countryDropdown.locator("option").count();

  const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
  await countryDropdown.selectOption({ index: randomIndex });

  console.log("País seleccionado index:", randomIndex);

  await page.getByRole("textbox", { name: "Company Name" }).fill("Davicho");
  await page.getByRole("textbox", { name: "Job Title" }).fill("Desarrollador");

  //logica para number of employees
  const numberOfEmployeesDropdown = page.locator("#Form_getForm_NoOfEmployees");
  const countNumberOfEmployees = await numberOfEmployeesDropdown
    .locator("option")
    .count();

  const randomIndexNumberOfEmployees =
    Math.floor(Math.random() * (countNumberOfEmployees - 1)) + 1;
  await numberOfEmployeesDropdown.selectOption({
    index: randomIndexNumberOfEmployees,
  });

  console.log(
    "Número de empleados seleccionado index:",
    randomIndexNumberOfEmployees,
  );

  await page
    .getByRole("textbox", { name: "Your Message" })
    .fill("Se logro la prueba");

  await page.getByRole("button", { name: "Contact Sales" }).click();

  await page.pause();
});
