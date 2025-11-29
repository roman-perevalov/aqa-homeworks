import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

const user = {
  email: faker.internet.email({ provider: "test.test" }),
  name: faker.person.fullName(),
  password: faker.internet.password({ length: 10 }),
};

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
  getRegistration(page, user.email, user.name, user.password, url);
  await expect(page.getByRole("navigation")).toContainText(user.name);
});

test.only("Пользователь меняет имя в профиле", async ({ page }) => {
  const { name, email, password } = user;

  // todo Дописать тест на изменение имени в профиле
  getRegistration(page, user.email, user.name, user.password, url);
  await expect(page.getByRole("navigation")).toContainText(name);
});
