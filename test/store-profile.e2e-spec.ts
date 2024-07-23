import { expect, test } from "@playwright/test";

test("update profile successfuly", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Rocket Pizza");
  await page.getByLabel("Descrição").fill("Another Description");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle"); //*it will wait all requests end

  const toast = page.getByText("Perfil atualizado com sucesso!");

  //* when expect an element to be visible we can use the await before expect
  await expect(toast).toBeVisible(); //* when use toBeVisible if an element on the page is on top of the element we selected, the test will fail.

  await page.getByRole("button", { name: "Close" }).click();

  await expect(page.getByRole("button", { name: "Rocket Pizza" })).toBeVisible();
});
