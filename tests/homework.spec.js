import { test, expect } from "@playwright/test";
import { App } from "../src/pages/app.page";
import { UserBuilder } from "../src/helpers/builders/user.builder";

const url = "https://realworld.qa.guru/";

test("Отредактировать профиль", async ({ page }) => {
  const app = new App(page);

  await app.login.loginAtAccount();

  await expect();
});

test("Создать новую статью", async ({ page }) => {});

test("Открыть статью и написать комментарий", async ({ page }) => {});

test("Добавить статью в избранное", async ({ page }) => {});

test("Удалить статью из избранного", async ({ page }) => {});
