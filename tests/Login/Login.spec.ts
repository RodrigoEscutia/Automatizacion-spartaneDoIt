import { test, expect } from '@playwright/test';

const URL = 'https://spartane.ai/doit/auth/login';
const USER = 'joserodrigoingsis@gmail.com';
const PASS = '$Admin123';

// AUT-001 Iniciar sesión de manera correcta
test('AUT-001 / INICIO DE SESIÓN / Iniciar sesión de manera correcta', async ({ page }) => {
  await page.goto(URL);
  await page.fill('#username', USER);
  await page.fill('#password', PASS);
  await page.click("//button[normalize-space()='Iniciar Sesión']");
  // Aquí puedes agregar una validación de éxito, por ejemplo:
  // await expect(page).toHaveURL(/dashboard|home/);
});

// AUT-002 Validar que no permita iniciar sesión sin contraseña
test('AUT-002 / INICIO DE SESIÓN / Validar que no permita iniciar sesión sin contraseña', async ({ page }) => {
  await page.goto(URL);
  await page.fill('#username', USER);
  const boton = page.locator("//button[normalize-space()='Iniciar Sesión']");
  await expect(boton).toBeDisabled();
});

// AUT-003 Validar que no permita iniciar sesión sin correo electrónico
test('AUT-003 / INICIO DE SESIÓN / Validar que no permita iniciar sesión sin correo electrónico', async ({ page }) => {
  await page.goto(URL);
  await page.fill('#password', PASS);
  const boton = page.locator("//button[normalize-space()='Iniciar Sesión']");
  await expect(boton).toBeDisabled();
});
