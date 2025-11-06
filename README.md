# Playwright Spartane Framework

Este framework está configurado para automatizar pruebas end-to-end usando [Playwright](https://playwright.dev/) en Chromium, para la aplicación web de Spartane DoIt.

## Características
- Solo ejecuta pruebas en Chromium
- Captura pantallas automáticamente en caso de error
- Genera videos de todas las ejecuciones
- Usa siempre la URL base: https://spartane.ai/doit/auth/login
- Estructura lista para agregar más pruebas en `tests/`

## Instalación

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Instala los navegadores de Playwright:
   ```sh
   npx playwright install chromium
   ```

## Ejecutar pruebas

```sh
npm test
```

Los reportes HTML se generan en la carpeta `playwright-report`.

## Estructura
- `playwright.config.js`: Configuración principal
- `tests/`: Carpeta para tus archivos de prueba

## Ejemplo de prueba
Ver `tests/login.spec.js` para un ejemplo básico de validación de la pantalla de login.
