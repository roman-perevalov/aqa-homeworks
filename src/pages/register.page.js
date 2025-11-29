export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.signUpButton = page.getByRole("button", { name: "Sign up" });
    this.email = page.getByRole("textbox", { name: "Email" });
    this.nameInput = page.getByRole("textbox", { name: "Your Name" });
    this.password = page.getByRole("textbox", { name: "Password" });
    // Техническое описание страницы
    this.signupLink = page
      .getByRole("link", { name: "Sign up" })
      .describe("Кнопка «Sign up»");
  }

  // Бизнесовые действия со страницей
  async register(name, email, password) {
    await this.email.click().fill(name);
    await this.nameInput.click().fill(email);
    await this.password.click().fill(password);

    this.signupLink.click();
  }
}
