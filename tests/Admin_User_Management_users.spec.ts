import { test, expect } from '@playwright/test';
test('Pruebas de entrenamiento source demo - Obtener de todos los usuarios registrados', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();
    await page.getByText('Admin', { exact: true }).click();
    await expect(page).toHaveURL(/\/admin\/viewSystemUsers/);
    const tableRows = page.locator('.oxd-table-body .oxd-table-row');
    await expect(tableRows.first()).toBeVisible();

    const userNames = await tableRows.evaluateAll((rows) =>
        rows.map((row) => row.querySelectorAll('[role="cell"]')[1]?.textContent?.trim() ?? '')
    );

    await expect(userNames.length).toBeGreaterThan(0);
    console.log('Usuarios encontrados:', userNames);

});

test.only('Pruebas de entrenamiento source demo - Obtener el username y employee Name', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();
    await page.getByText('Admin', { exact: true }).click();
    await expect(page).toHaveURL(/\/admin\/viewSystemUsers/);
    const tableRows = page.locator('.oxd-table-body .oxd-table-row');
    await expect(tableRows.first()).toBeVisible();

    const userData = await tableRows.evaluateAll((rows) =>
        rows.map((row) => {
            const cells = row.querySelectorAll('[role="cell"]');
            return {
                username: cells[1]?.textContent?.trim() ?? '',
                employeeName: cells[3]?.textContent?.trim() ?? '',
                status: cells[4]?.textContent?.trim() ?? ''
            };
        })
    );

    await expect(userData.length).toBeGreaterThan(0);
    console.log('Usuarios encontrados:', userData);

});
