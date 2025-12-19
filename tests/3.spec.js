import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

let email = faker.internet.email({ provider: "test.test" });
let name = faker.person.fullName();
let password = faker.internet.password({ length: 10 });
const url = "https://realworld.qa.guru/";

const getRegistration = async (page, name, password, email, url) => {
  await page.goto(url);
  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).fill(name);
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill(email);
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill(password);
  await page.getByRole("button", { name: "Sign up" }).click();
};

test("Регистрация в блоге realworld", async ({ page }) => {
  getRegistration(page, name, password, email, url);
  await expect(page.getByRole("navigation")).toContainText(name);
});

test("Пользователь меняет имя в профиле", async ({ page }) => {
  // todo Дописать тест на изменение имени в профиле
  getRegistration(page, name, password, email, url);
  await expect(page.getByRole("navigation")).toContainText(name);
});
