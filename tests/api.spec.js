import { test, expect } from "@playwright/test";

const url = "https://apichallenges.eviltester.com/";
let token;

test.describe("Challenge", () => {
  test.beforeEach(async ({ request }) => {
    let response = await request.post(`${url}challenger`);
    token = response.headers();

    // Для дебага
    // console.log(`${url}gui/challenges/${token["x-challenger"]}`);
  });

  // Демо
  // r =  await request.get(`${url}todos`, {
  //     headers:{
  //         'X-CHALLENGER': token['x-challenger']
  //     }
  // });
  // const body = await r.json();

  //todo Данную проверку вынести в тест и посмотреть конструкцию every
  // body.todos.forEach( item => {
  // expect(item).toEqual(expect.objectContaining({ id: expect.any(Number)}));
  //     })
  // });

  test.only("Получить список челленджей", async ({ request }) => {
    let response = await request.get(`${url}challenges`, {
      headers: {
        "X-CHALLENGER": token["x-challenger"],
      },
    });

    const body = await response.json();
    // response = request.get(`${url}todos`, {
    //   headers: {
    //     "X-CHALLENGER": token["x-challenger"],
    //   },
    // });

    expect(body.challenges.length).toBe(59);
  });
});
