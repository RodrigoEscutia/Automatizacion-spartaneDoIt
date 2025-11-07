// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium',
    baseURL: 'https://spartane.ai/doit/auth/login',
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'retain-on-failure',
    headless: true
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  testDir: './tests',
};

module.exports = config;
