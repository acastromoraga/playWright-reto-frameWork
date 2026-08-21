import { test, expect } from '@playwright/test';

test('Pruebas de entrenamiento source demo - Ingreso Login', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();

});

test('Pruebas de entrenamiento source demo - Ingreso Login con credenciales incorrectas', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill('IncorrectUser');
    await page.getByRole('textbox', { name: 'Password' }).fill('IncorrectPass');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();


});

