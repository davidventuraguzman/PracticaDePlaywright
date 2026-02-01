import { Page, Locator } from "@playwright/test";

export const usuariosOrange = [
  {
    nombre: "David Ventura",
    email: "david.rara@gmail.com",
    telefono: "999111222",
    empresa: "Empresa Uno",
    cargo: "QA",
    mensaje: "Hola mundo 1",
  },
  {
    nombre: "Anlly",
    email: "anlly@gmail.com",
    telefono: "999333444",
    empresa: "Empresa Dos",
    cargo: "Dev",
    mensaje: "Hola mundo 2",
  },
];

export class LoginPage {
  readonly page: Page;
  //selectores vacios
  readonly orangeBookDemoBtn: Locator;
  readonly orangeFullName: Locator;
  readonly orangeEmail: Locator;
  readonly orangePhone: Locator;
  readonly orangeCountryDropdown: Locator;
  readonly orangeCompanyName: Locator;
  readonly orangeJobTitle: Locator;
  readonly orangeEmployeesDropdown: Locator;
  readonly orangeMessage: Locator;
  readonly orangeContactSalesBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    //selectores llenos
    this.orangeBookDemoBtn = page.getByRole("button", {
      name: "Book a Free Demo",
    });
    this.orangeFullName = page.getByRole("textbox", { name: "Full Name" });
    this.orangeEmail = page.getByRole("textbox", { name: "Email" });
    this.orangePhone = page.getByRole("textbox", { name: "Phone Number" });
    this.orangeCountryDropdown = page.locator("#Form_getForm_Country");
    this.orangeCompanyName = page.getByRole("textbox", {
      name: "Company Name",
    });
    this.orangeJobTitle = page.getByRole("textbox", { name: "Job Title" });
    this.orangeEmployeesDropdown = page.locator("#Form_getForm_NoOfEmployees");
    this.orangeMessage = page.getByRole("textbox", { name: "Your Message" });
    this.orangeContactSalesBtn = page.getByRole("button", {
      name: "Contact Sales",
    });
  }

  async gotoOrange() {
    await this.page.goto("https://www.orangehrm.com/");
  }

  async registrarOrange(
    nombre: string,
    email: string,
    phone: string,
    company: string,
    jobTitle: string,
    message: string,
  ) {
    await this.orangeBookDemoBtn.click();

    await this.orangeFullName.fill(nombre);
    await this.orangeEmail.fill(email);
    await this.orangePhone.fill(phone);

    // logica para el country
    const countCountry = await this.orangeCountryDropdown
      .locator("option")
      .count();
    const randomCountryIndex =
      Math.floor(Math.random() * (countCountry - 1)) + 1;
    await this.orangeCountryDropdown.selectOption({
      index: randomCountryIndex,
    });
    console.log("País seleccionado index:", randomCountryIndex);

    await this.orangeCompanyName.fill(company);
    await this.orangeJobTitle.fill(jobTitle);

    // logica para el numero de empleados
    const countEmployees = await this.orangeEmployeesDropdown
      .locator("option")
      .count();
    const randomEmployeesIndex =
      Math.floor(Math.random() * (countEmployees - 1)) + 1;
    await this.orangeEmployeesDropdown.selectOption({
      index: randomEmployeesIndex,
    });
    console.log(
      "Número de empleados seleccionado index:",
      randomEmployeesIndex,
    );
    await this.orangeMessage.click();
    await this.orangeMessage.fill(message);
    await this.orangeContactSalesBtn.click({ force: true });
  }
}
