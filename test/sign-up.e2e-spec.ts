import { expect, test } from "@playwright/test";

test("sign up successfully", async ({ page }) => {
  //* I'm put the relative url because the baseUrl was defined in playwright.config.ts file
  //* waitUntil: networkidle - wait for all js' requests.
  //* to get the elements (ex: email's input) click on locator tab and then click in left button (circle, pick locator) and copy.

  await page.goto("/sign-up", { waitUntil: "networkidle" });
  await page.getByLabel("Nome do estabelecimento").fill("Pizza shop");
  await page.getByLabel("Seu nome").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Seu celular").fill("12374849849485");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000); //* in playwright is normal the last screen be white, so we can use this hack.
});

test("sign up with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("dushedf");
  await page.getByLabel("Seu nome").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Seu celular").fill("12374849849485");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar restaurante.");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000); //* in playwright is normal the last screen be white, so we can use this hack.
});

test("navigate to new login page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("/sign-in");
});
