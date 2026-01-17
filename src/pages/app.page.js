import {
  HomePage,
  MainPage,
  RegisterPage,
  LoginPage,
  SettingsPage,
  ArticlePage,
  GlobalFeed,
} from "./index";

export class App {
  constructor(page) {
    this.page = page;
    this.home = new HomePage(page);
    this.main = new MainPage(page);
    this.register = new RegisterPage(page);
    this.login = new LoginPage(page);
    this.settings = new SettingsPage(page);
    this.article = new ArticlePage(page);
    this.globalFeed = new GlobalFeed(page);
  }
}
