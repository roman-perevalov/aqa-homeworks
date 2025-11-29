export class MainPage {
  constructor(page) {
    this.page = page;
    // Техническое описание страницы
    this.signupLink = page
      .getByRole("link", { name: "Sign up" })
      .describe("Кнопка «Sign up»");
  }

  // Бизнесовые действия со страницей
  async goToRegister() {
    this.signupLink.click();
  }

  async openUrL(url) {
    this.page.goto(url);
  }
}
