import { test, expect } from "@playwright/test";
import { App } from "../src/pages/app.page";
import { UserBuilder } from "../src/helpers/builders/user.builder";
import { faker } from "@faker-js/faker";

const url = "https://realworld.qa.guru/";

test.describe("Домашнее задание по уроку Page Object Pattern", () => {
  test.beforeEach(async ({ page }) => {
    const app = new App(page);
    const user = new UserBuilder()
      .withEmail()
      .withName()
      .withPassword()
      .build();
    const { email, name, password } = user;

    await app.main.open(url);
    await app.main.gotoRegister();
    await app.register.register(name, email, password);
  });

  test("№ 1. Изменить аватар пользователя", async ({ page }) => {
    const app = new App(page);

    const newPicture = faker.image.url(); // Пример: 'https://picsum.photos/seed/KY0u8X/2290/2630';

    await app.main.goToSettings();

    await app.settings.updateProfilePicture(newPicture);

    await expect(app.main.getProfilePicture()).toHaveAttribute(
      "src",
      newPicture,
    );
  });

  test("№ 2. Изменить имя пользователя", async ({ page }) => {
    const app = new App(page);
    const newName = faker.person.fullName();

    await app.main.goToSettings();
    await app.settings.updateName(newName);

    await expect(app.main.getProfileName()).toContainText(newName);
  });

  test("№ 3. Создать новую статью", async ({ page }) => {
    const app = new App(page);

    const title = faker.music.artist(); // Заголовок статьи
    const description = faker.music.genre(); // Описание статьи
    const mainArticle = faker.lorem.paragraphs(3); // Основное содержание статьи
    const tags = faker.music.songName(); // Тэги

    await app.main.goToWriteNewArticle();

    await app.article.writeArticle(title, description, mainArticle, tags);

    await expect(app.article.getHeadingLocator()).toContainText(title);
    await expect(app.article.getParagraphLocator()).toContainText(mainArticle);
  });

  test("№ 4. Открыть статью и написать комментарий", async ({ page }) => {
    const app = new App(page);
    const comment = faker.food.description();

    const title = faker.music.artist(); // Заголовок статьи
    const description = faker.music.genre(); // Описание статьи
    const mainArticle = faker.lorem.paragraphs(3); // Основное содержание статьи
    const tags = faker.music.songName(); // Тэги

    await app.main.goToWriteNewArticle();

    await app.article.writeArticle(title, description, mainArticle, tags);

    await app.globalFeed.writeComment(comment);

    await expect(app.globalFeed.getWrittedCommentArea()).toContainText(comment);
  });

  test("№ 5. Поставить лайк статье", async ({ page }) => {
    const app = new App(page);

    const title = faker.music.artist(); // Заголовок статьи
    const description = faker.music.genre(); // Описание статьи
    const mainArticle = faker.lorem.paragraphs(3); // Основное содержание статьи
    const tags = faker.music.songName(); // Тэги

    await app.main.goToWriteNewArticle();

    await app.article.writeArticle(title, description, mainArticle, tags);

    await app.main.open(url);
    await app.main.goToGlobalFeed();

    await app.globalFeed.addLike(0);

    await expect(app.globalFeed.getLikeCount(0)).toContainText("( 1 )");
  });
});
