import { test, expect } from "@playwright/test";
import { App } from "../src/pages/app.page";
import { UserBuilder } from "../src/helpers/builders/user.builder";
import { faker } from "@faker-js/faker";

const url = "https://realworld.qa.guru/";

test.describe.only("Домашнее задание по уроку Page Object Pattern", () => {
  test("Изменить аватар пользователя", async ({ page }) => {
    const user = new UserBuilder()
      .withEmail()
      .withName()
      .withPassword()
      .build();
    const { email, name, password } = user;
    const app = new App(page);
    const newPicture = faker.image.url(); // Пример: 'https://picsum.photos/seed/KY0u8X/2290/2630';

    await app.main.open(url);
    await app.main.gotoRegister();
    await app.register.register(name, email, password);
    await app.main.goToSettings();

    await app.settings.updateProfilePicture(newPicture);

    await expect(app.main.getProfilePicture()).toHaveAttribute(
      "src",
      newPicture,
    );
  });

  test("Изменить имя пользователя", async ({ page }) => {
    const user = new UserBuilder()
      .withEmail()
      .withName()
      .withPassword()
      .build();
    const { email, name, password } = user;
    const app = new App(page);
    const newName = faker.person.fullName();

    await app.main.open(url);
    await app.main.gotoRegister();
    await app.register.register(name, email, password);

    await app.main.goToSettings();
    await app.settings.updateName(newName);

    await expect(app.main.getProfileName()).toContainText(newName);
  });

  test("Создать новую статью", async ({ page }) => {
    const user = new UserBuilder()
      .withEmail()
      .withName()
      .withPassword()
      .build();
    const { email, name, password } = user;
    const app = new App(page);

    const title = faker.music.artist(); // Заголовок статьи
    const description = faker.music.genre(); // Описание статьи
    const mainArticle = faker.lorem.paragraphs(3); // Основное содержание статьи
    const tags = faker.music.songName();

    await app.main.open(url);
    await app.main.gotoRegister();
    await app.register.register(name, email, password);
    await app.main.goToWriteNewArticle();

    await app.article.writeArticle(title, description, mainArticle, tags);

    await expect(page.getByRole("heading")).toContainText(title);
    await expect(page.getByRole("paragraph")).toContainText(mainArticle);
  });

  test("Открыть статью и написать комментарий", async ({ page }) => {
    const user = new UserBuilder()
      .withEmail()
      .withName()
      .withPassword()
      .build();
    const { email, name, password } = user;
    const app = new App(page);
    const comment = faker.food.description();

    await app.main.open(url);
    await app.main.gotoRegister();
    await app.register.register(name, email, password);

    await app.main.goToGlobalFeed();

    await app.globalFeed.goToArticle(0);

    await app.globalFeed.writeComment(comment);

    await expect(page.getByRole("main")).toContainText(comment);
  });

  test("Поставить лайк статье", async ({ page }) => {
    const user = new UserBuilder()
      .withEmail()
      .withName()
      .withPassword()
      .build();
    const { email, name, password } = user;
    const app = new App(page);

    await app.main.open(url);
    await app.main.gotoRegister();
    await app.register.register(name, email, password);

    await app.main.goToGlobalFeed();

    await app.globalFeed.addLike(2);

    await expect(page.getByRole("main")).toContainText("( 1 )");
  });

  // test("Удалить статью из избранного", async ({ page }) => {});
});
