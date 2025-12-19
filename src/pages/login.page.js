import { test } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.login = page.getByRole("textbox", { name: "Email" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async loginAtAccount(name = "cevap013@ya.ru", password = "cevap013@ya.ru") {
    await this.email.click().fill("cevap013@ya.ru");
    await this.password.click().fill("cevap013@ya.ru");

    this.loginButton.click();
  }
}
