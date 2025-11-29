import { test, expect } from "@playwright/test";

test("Регистрация пользователя c помощью email", async ({ page }) => {
  // Arrange Предусловие
  await page.goto("https://realworld.qa.guru/");

  // Act Шаги
  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).fill("Cevap");
  await page.getByRole("textbox", { name: "Your Name" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("cevapcici300018@gmail.com");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("cevapcici1318");
  await page.getByRole("button", { name: "Sign up" }).click();

  // Assert Проверка
  await expect(page.getByRole("navigation")).toContainText("Cevap");
});
