import { test, expect, Page } from '@playwright/test';

const URL = 'https://spartane.ai/doit/auth/login';
const USER = 'joserodrigoingsis@gmail.com';
const PASS = '$Admin123';

async function iniciarSesion(page: Page) {
  await page.goto(URL);
  await page.fill('#username', USER);
  await page.fill('#password', PASS);
  await page.click("//button[normalize-space()='Iniciar Sesión']");
}

async function ingresarAProblematicas(page: Page) {
  await iniciarSesion(page);
  const select = page.locator('select.project-picker');
  await expect(select).toBeVisible();
  await select.selectOption({ label: 'SmartGym Pro (SMP)' });
  await expect(select).toHaveValue('6182');
  await page.click("//span[contains(text(),'Secciones')]");
  await page.click("//span[normalize-space()='11']");
  await expect(page.locator("//h1[normalize-space()='Problemáticas']")).toBeVisible();
}

async function cerrarSesion(page: Page) {
  await page.click("//button[@id='userDropdown']");
  await page.click("//a[normalize-space()='Cerrar sesión']");
}

test.describe('PROBLEMÁTICAS', () => {
  test('AUT-012 / PROBLEMÁTICAS / Validar que se pueda ingresar a la sección problemáticas', async ({ page }) => {
    await ingresarAProblematicas(page);
  });

  test('AUT-013 / PROBLEMÁTICAS / Validar el botón de ROI Sectorial', async ({ page }) => {
    await ingresarAProblematicas(page);
    await page.click("//button[normalize-space()='ROI Sectorial']");
    await expect(page.locator("//h5[@id='roiSectorialModalLabel']")).toBeVisible();
  });

  test('AUT-014 / PROBLEMÁTICAS / Validar Agregar problemática nueva', async ({ page }) => {
    await ingresarAProblematicas(page);
    await page.click("//button[@aria-label='Agregar nueva problemática de organización']");
    await page.fill('#org-problema-0', 'Esta es una prueba automatizada para Problemáticas de la  Organización en Problemática');
    await page.selectOption('#org-criticidad-0', { label: 'Alta' });
    await page.fill('#org-modulos-0', 'Esta es una prueba automatizada para Problemáticas de la Organización en Módulos que la resuelven');
    await page.click("//button[normalize-space()='Guardar Cambios']");
    await cerrarSesion(page);
    await ingresarAProblematicas(page);
    const eliminarBtn = page.locator("//button[normalize-space()='Eliminar']");
    await expect(eliminarBtn).toBeVisible();
    await eliminarBtn.click();
    await page.click("//button[normalize-space()='Sí, eliminar']");
    await page.click("//button[normalize-space()='Guardar Cambios']");
    await cerrarSesion(page);
    await ingresarAProblematicas(page);
    await expect(page.locator("//button[normalize-space()='Eliminar']")).not.toBeVisible();
  });

  test('AUT-015 / PROBLEMÁTICAS / Validar Agregar problemática Sectorial nueva', async ({ page }) => {
    await ingresarAProblematicas(page);
    await page.click("//button[normalize-space()='Agregar Problemática Sectorial']");
    await page.fill('#sector-problema-0', 'Esta es una prueba automatizada para Problemáticas del Sector en Problemática');
    await page.fill('#sector-frecuencia-0', '');
    await page.fill('#sector-frecuencia-0', '100');
    await page.fill('#sector-modulos-0', 'Esta es una prueba automatizada para Problemáticas del Sector en Módulos que la resuelven');
    await page.fill('#sector-roi-0', '');
    await page.fill('#sector-roi-0', '80');
    await page.click("//button[normalize-space()='Guardar Cambios']");
    await cerrarSesion(page);
    await ingresarAProblematicas(page);
    const eliminarBtn = page.locator("//button[normalize-space()='Eliminar']");
    await expect(eliminarBtn).toBeVisible();
    await eliminarBtn.click();
    await page.click("//button[normalize-space()='Sí, eliminar']");
    await page.click("//button[normalize-space()='Guardar Cambios']");
    await cerrarSesion(page);
    await ingresarAProblematicas(page);
    await expect(page.locator("//button[normalize-space()='Eliminar']")).not.toBeVisible();
  });
});
