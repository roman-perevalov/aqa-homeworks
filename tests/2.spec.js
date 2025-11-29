import { test, expect } from "@playwright/test";

test("Заказ бургера", async ({ page }) => {
  // Arrange Предусловие
  await page.goto("file:///C:/Users/roman/Desktop/burger-order.html");

  // Act Шаги

  // Заполнить имя
  await page.getByRole("textbox", { name: "Имя клиента:" }).fill("Горан"); // Поиск по роли

  // Выбрать тип бургера
  await page.locator("#burgerType").selectOption("spicy"); // Поиск по CSS id

  // Выбрать размер порции
  await page.locator(".radio-group", { hasText: "Большой" }).click(); // Поиск по CSS классу

  // Добавить горчицу
  await page.getByText("Горчица").click(); // Поиск по тексту

  // Выбрать вариант доставки "С собой"
  await page.locator("span.switch-slider").click();

  // Увеличить количество бургеров
  await page.locator(".counter-increase", { hasText: "+" }).click();

  // Выбрать способ оплаты "Картой онлайн"
  await page.getByLabel("Картой онлайн").click();

  // Нажать кнопку заказа
  await page.getByText("Заказать бургер").click();

  // await page.getByTitle().click(); // Поиск по html-title
  // await page.getByLabel().click(); // Поиск по html-label
  // await page.locator('[placeholder="Введите ваше имя"]').fill('Андрей'); // Ключ-значение
  // await page.getByPlaceholder('Введите ваше имя').click(); // Поиск по плейсхолдеру

  // Assert Проверка
  await expect(page.getByText("✅ Заказ принят!")).toBeVisible();
  await expect(page.locator("#popupMessage")).toContainText("Спасибо за заказ");
  await expect(
    page.getByText("Ваш заказ будет готов в течение 20-30 минут.")
  ).toBeVisible();
});
