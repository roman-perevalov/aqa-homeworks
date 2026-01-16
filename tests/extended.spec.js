import { expect, test } from "@playwright/test";

const url = "https://realworld.qa.guru/";

// test.only("Визуальная регрессия главной страницы", async ({ page }) => {
//   await page.goto(url);

//   await expect(page).toHaveScreenshot("homePage.png", {
//     fullPage: true,
//     mask: [
//       page.locator(".tag-pill"), // маскируем теги
//       page.locator(".date"), // маскируем даты
//       page.locator(".counter"), // маскируем счетчик
//     ],
//   });
// });

// test.only("Визуальная регрессия снапшот главной страницы", async ({ page }) => {
//   await page.goto(url);

//   //   const $logo = page.locator(".navbar-brand");

//   //   await expect($logo).toMatchAriaSnapshot();

//   const $body = page.locator("#root");
//   await expect($body).toMatchAriaSnapshot();

//   //   await expect(page).toHaveScreenshot("homePage.png", {
//   //     fullPage: true,
//   //     mask: [
//   //       page.locator(".tag-pill"), // маскируем теги
//   //       page.locator(".date"), // маскируем даты
//   //       page.locator(".counter"), // маскируем счетчик
//   //     ],
//   //   });
// });

test("Визуальная регрессия главной страницы с моком данных", async ({
  page,
}) => {
  await page.route("**/tags", async (route) => {
    const json = { tags: ["Понедельник", "Monday"] };
    route.fulfill({ json });
  });

  await page.goto(url);

  await expect($body).toMatchAriaSnapshot();
});
