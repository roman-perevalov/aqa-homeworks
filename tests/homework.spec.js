import { test, expect } from "@playwright/test";
import { App } from "../src/pages/app.page";
import { UserBuilder } from "../src/helpers/builders/user.builder";
import { faker } from "@faker-js/faker";

const url = "https://realworld.qa.guru/";

test("Изменить аватар пользователя", async ({ page }) => {
  const user = new UserBuilder().withEmail().withName().withPassword().build();
  const { email, name, password } = user;
  const app = new App(page);
  const newPicture =
    "https://i.pinimg.com/236x/d6/f2/38/d6f238dcf1e585ef7bc421a18cc7538f.jpg";

  await app.main.open(url);
  await app.main.gotoRegister();
  await app.register.register(name, email, password);
  await app.main.goToSettings();

  await app.settings.updateProfilePicture(newPicture);

  await expect(app.main.getProfilePicture()).toHaveAttribute(
    "src",
    "https://i.pinimg.com/236x/d6/f2/38/d6f238dcf1e585ef7bc421a18cc7538f.jpg"
  );
});

test("Изменить имя пользователя", async ({ page }) => {
  const user = new UserBuilder().withEmail().withName().withPassword().build();
  const { email, name, password } = user;
  const app = new App(page);
  const newName = faker.person.fullName();
  // const newBio = '';
  // const newEmail = '';
  // const newPassword = '';

  await app.main.open(url);
  await app.main.gotoRegister();
  await app.register.register(name, email, password);

  await app.main.goToSettings();
  await app.settings.updateName(newName);

  await expect(app.main.getProfileName()).toContainText(newName);
});

test("Создать новую статью", async ({ page }) => {
  const user = new UserBuilder().withEmail().withName().withPassword().build();
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

// test("Открыть статью и написать комментарий", async ({ page }) => {});

// test("Добавить статью в избранное", async ({ page }) => {});

// test("Удалить статью из избранного", async ({ page }) => {});
