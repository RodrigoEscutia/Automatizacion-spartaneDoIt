import { test, expect } from '@playwright/test';

const URL = 'https://spartane.ai/doit/auth/login';
const USER = 'joserodrigoingsis@gmail.com';
const PASS = '$Admin123';

async function iniciarSesion(page) {
  await page.goto(URL);
  await page.fill('#username', USER);
  await page.fill('#password', PASS);
  await page.click("//button[normalize-space()='Iniciar Sesión']");
}

test.describe('HEADER', () => {
  test('AUT-004 / HEADER / Validar que se pueda seleccionar el proyecto SmartGym Pro (SMP)', async ({ page }) => {
    await iniciarSesion(page);
    // Esperar a que el select esté visible
    const select = page.locator('select.project-picker');
    await expect(select).toBeVisible();
    // Seleccionar el proyecto SmartGym Pro (SMP) por su valor
    await select.selectOption({ label: 'SmartGym Pro (SMP)' });
    // Validar que el valor seleccionado es el correcto
    await expect(select).toHaveValue('6182');
    // Click en Secciones
    await page.click("//span[contains(text(),'Secciones')]");
    // Click en el número 1
    await page.click("//span[normalize-space()='1']");
    // Validar que existe el h1 Proyecto
    await expect(page.locator("//h1[normalize-space()='Proyecto']")).toBeVisible();
  });

  test('AUT-005 / HEADER / Validar que el botón Estatus de generación redireccione de manera correcta', async ({ page }) => {
    await iniciarSesion(page);
    await page.click("//button[@title='Sincronizar Cambios']");
    await expect(page.locator("//h1[normalize-space()='Estatus de Generación']")).toBeVisible();
  });

  test('AUT-006 / HEADER / Validar que el menú Secciones funciona de manera correcta', async ({ page }) => {
    await iniciarSesion(page);
    await page.click("//span[contains(text(),'Secciones')]");
    await expect(page.locator("//span[normalize-space()='1']")).toBeVisible();
  });

  test('AUT-007 / HEADER / Validar que el botón idiomas muestra Español, Inglés y Francés', async ({ page }) => {
    await iniciarSesion(page);
    await page.click("//button[@id='languageDropdown']");
    await expect(page.locator("//a[normalize-space()='Español']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='English']")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Français']")).toBeVisible();
  });

  test('AUT-008 / HEADER / Validar cierre de Sesión', async ({ page }) => {
    await iniciarSesion(page);
    await page.click("//div[@class='user-avatar me-2']");
    await page.click("//a[normalize-space()='Cerrar sesión']");
    await expect(page.locator("//h1[normalize-space()='Iniciar Sesión']")).toBeVisible();
  });
});
