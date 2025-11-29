import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage } from "../src/pages/main.page";
import { RegisterPage } from "../src/pages/register.page";

const user = {
  email: faker.internet.email({ provider: "test.test" }),
  name: faker.person.fullName(),
  password: faker.internet.password({ length: 10 }),
};

const url = "https://realworld.qa.guru/";

const getRegistration = async (page, name, password, email, url) => {
  const mainPage = new MainPage(page);
  await mainPage.openUrL(url);
  await mainPage.goToRegister();

  await page.getByRole("textbox", { name: "Your Name" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).fill(name);
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill(email);
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill(password);
  await page.getByRole("button", { name: "Sign up" }).click();
};

test("Регистрация в блоге realworld", async ({ page }) => {
  getRegistration(page, user.email, user.name, user.password, url);
  await expect(page.getByRole("navigation")).toContainText(user.name);
});

test("Пользователь меняет имя в профиле", async ({ page }) => {
  const { name, email, password } = user;

  getRegistration(page, user.email, user.name, user.password, url);
  await expect(page.getByRole("navigation")).toContainText(name);
});
