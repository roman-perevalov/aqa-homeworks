import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { HomePage } from "../src/pages/home.page";
import { MainPage } from "../src/pages/main.page";
import { RegisterPage } from "../src/pages/register.page";

const user = {
  email: faker.internet.email({ provider: "test.test" }),
  name: faker.person.fullName(), // 'Allen Brown'
  password: faker.internet.password({ length: 10 }),
};

const url = "https://realworld.qa.guru/";

test("Регистрация в блоге realworld.qa.guru", async ({ page }) => {
  const { email, name, password } = user;

  const homePage = new HomePage(page);
  const mainPage = new MainPage(page);
  const registrationPage = new RegisterPage(page);

  await mainPage.open(url);
  await mainPage.gotoRegister();
  await registrationPage.register(name, email, password);

  await expect(homePage.getProfileNameLocator()).toContainText(user.name);
  // await expect(homePage.getProfileNameLocator()).toContainText(user.name);
});
