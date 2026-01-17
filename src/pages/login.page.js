export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async loginAtAccount(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

    this.loginButton.click();
  }
}
