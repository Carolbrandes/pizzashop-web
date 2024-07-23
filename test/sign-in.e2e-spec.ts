import { expect, test } from "@playwright/test";

test("sign in successfully", async ({ page }) => {
  //* I'm put the relative url because the baseUrl was defined in playwright.config.ts file
  //* waitUntil: networkidle - wait for all js' requests.
  //* to get the elements (ex: email's input) click on locator tab and then click in left button (circle, pick locator) and copy.

  await page.goto("/sign-in", { waitUntil: "networkidle" });
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para seu e-mail.",
  );

  await expect(toast).toBeVisible();

  // await page.waitForTimeout(2000); //* in playwright is normal the last screen be white, so we can use this hack.
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });
  await page.getByLabel("Seu e-mail").fill("wrong@example.com");
  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText("Credenciais inválidas");

  await expect(toast).toBeVisible();
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("/sign-up");
});
