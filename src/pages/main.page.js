import { test } from "@playwright/test";

export class MainPage {
  constructor(page) {
    this.page = page;
    this.signupLink = page
      .getByRole("link", { name: "Sign up" })
      .describe("Кнопка 'Зарегистрироваться'");
    this.loginLink = page.getByRole("link", { name: " Login" });
    this.dropdownMenu = page.locator(".dropdown-toggle");
    this.settingsButton = page.getByRole("link", { name: " Settings" });
    this.profilePicture = page.locator(".user-pic");
    this.newArticleButton = page.getByRole("link", { name: " New Article" });
  }

  async gotoRegister() {
    return test.step("Перейти на страницу Регистрации", async (step) => {
      this.signupLink.click();
    });
  }

  async goToLogin() {
    // return test.step("Перейти на страницу Логина", async (step) => {
    await this.loginLink.click();
    // });
  }

  async goToSettings() {
    await this.dropdownMenu.click();
    await this.settingsButton.click();
  }

  async goToWriteNewArticle() {
    await this.newArticleButton.click();
  }

  getProfilePicture() {
    return this.profilePicture;
  }

  getProfileName() {
    return this.dropdownMenu;
  }

  async open(url) {
    return test.step(`Перейти на страницу ${url} `, async (step) => {
      await this.page.goto(url);
    });
  }
}
